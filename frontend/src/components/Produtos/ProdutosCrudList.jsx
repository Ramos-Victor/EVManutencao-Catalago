import { useEffect, useState } from "react";

export default function ProdutosCrudList({ onEdit, onDelete, token }) {
  const [produtos, setProdutos] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchProdutos() {
      setLoading(true);

      setError("");

      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/produtos?page=${page}&limit=5`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Erro ao carregar produtos.");
        }

        setProdutos(data.data || []);
        setTotalPages(data.pagination.totalPages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos();
  }, [token, page]);

  return (
    <div className="crud-list">
      {loading && <div>Carregando...</div>}

      {error && <div className="form-error">{error}</div>}

      {!loading && !error && produtos.length === 0 && (
        <div>Nenhum produto encontrado.</div>
      )}

      {!loading && !error && produtos.length > 0 && (
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
              {produtos.map((p) => (
                <tr key={p.id}>
                  <td>{p.nome}</td>

                  <td>{p.descricao}</td>

                  <td>{p.ativo ? "Ativo" : "Inativo"}</td>

                  <td style={{ display: "flex", gap: "5px" }}>
                    <button
                      className="btn btn-outline"
                      onClick={() => onEdit(p)}
                    >
                      Editar
                    </button>

                    <button
                      className="btn btn-primary"
                      onClick={() => onDelete(p)}
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
