import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

function ProdutosList() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/produtos`,
        );
        const json = await response.json();

        if (!response.ok) {
          throw new Error(
            json.message || "Não foi possível carregar os produtos.",
          );
        }

        setProdutos(json?.data ?? []);
      } catch (err) {
        setError(err.message || "Erro ao carregar os produtos.");
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos();
  }, []);

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
          ) : produtos.length > 0 ? (
            <div className="produtos-grid">
              {produtos.map((produto) => (
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

      <ProductModal
        produto={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default ProdutosList;
