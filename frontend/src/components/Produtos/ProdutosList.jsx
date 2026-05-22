import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

function ProdutosList() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/produtos?page=${page}&limit=6`,
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Não foi possível carregar os produtos.",
          );
        }

        setProdutos(data.data ?? []);
        setTotalPages(data.pagination?.totalPages ?? 1);
      } catch (err) {
        setError(err.message || "Erro ao carregar os produtos.");
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos();
  }, [page]);

  const produtosAtivos = produtos.filter((produto) => produto.ativo != false);

  return (
    <>
      <section className="produtos-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Produtos</span>
            <h2>Veja os produtos que entregamos com segurança e eficiência</h2>
          </div>

          {loading ? (
            <div className="produtos-state">Carregando produtos...</div>
          ) : error ? (
            <div className="produtos-state produtos-state-error">
              Não foi possível carregar os produtos. {error}
            </div>
          ) : produtosAtivos.length > 0 ? (
            <div className="produtos-grid">
              {produtosAtivos.map((produto) => (
                <ProductCard
                  key={produto.id ?? produto.nome ?? produto.titulo}
                  produto={produto}
                  onOpen={setSelectedProduct}
                />
              ))}
            </div>
          ) : (
            <div className="produtos-state">
              Nenhum produto encontrado no momento.
            </div>
          )}
        </div>
      </section>
      {produtosAtivos.length > 0 ? (
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
      ) : (
        ""
      )}
      <ProductModal
        produto={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default ProdutosList;
