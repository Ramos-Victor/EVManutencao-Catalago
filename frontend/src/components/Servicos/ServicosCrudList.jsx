import { useEffect, useState } from "react";

export default function ServicosCrudList({ onEdit, onDelete, token }) {
  const [servicos, setServicos] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchServicos() {
      setLoading(true);

      setError("");

      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/servicos?page=${page}&limit=4`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Erro ao carregar serviços.");
        }

        setServicos(data.data || []);

        setTotalPages(data.pagination?.totalPages ?? 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchServicos();
  }, [token, page]);

  return (
    <div className="crud-list">
      {loading && <div>Carregando...</div>}

      {error && <div className="form-error">{error}</div>}

      {!loading && !error && servicos.length === 0 && (
        <div style={{ marginTop: "1rem" }}>Nenhum serviço encontrado.</div>
      )}

      {!loading && !error && servicos.length > 0 && (
        <>
          <table className="crud-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {servicos.map((s) => (
                <tr key={s.id}>
                  <td>{s.nome}</td>

                  <td>{s.descricao}</td>

                  <td>{s.ativo ? "Ativo" : "Inativo"}</td>

                  <td style={{ display: "flex", gap: "5px" }}>
                    <button
                      className="btn btn-outline"
                      onClick={() => onEdit(s)}
                    >
                      Editar
                    </button>

                    <button
                      className="btn btn-primary"
                      onClick={() => onDelete(s)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button
              className="btn btn-outline"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Anterior
            </button>

            <span>
              {page} de {totalPages}
            </span>

            <button
              className="btn btn-outline"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Próxima
            </button>
          </div>
        </>
      )}
    </div>
  );
}
