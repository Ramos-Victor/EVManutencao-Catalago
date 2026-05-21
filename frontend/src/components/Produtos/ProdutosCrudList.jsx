import { useEffect, useState } from "react";

export default function ProdutosCrudList({ onEdit, onDelete, token }) {
  const [produtos, setProdutos] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProdutos() {
      setLoading(true);

      setError("");

      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/produtos`,
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
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos();
  }, [token]);

  return (
    <div className="crud-list">
      {loading && <div>Carregando...</div>}

      {error && <div className="form-error">{error}</div>}

      {!loading && !error && produtos.length === 0 && (
        <div>Nenhum produto encontrado.</div>
      )}

      {!loading && !error && produtos.length > 0 && (
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

                <td>
                  <button className="btn btn-outline" onClick={() => onEdit(p)}>
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
      )}
    </div>
  );
}
