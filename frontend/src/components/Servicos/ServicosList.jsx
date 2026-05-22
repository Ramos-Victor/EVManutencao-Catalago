import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";

function ServicosList() {
  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedService, setSelectedService] = useState(null);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchServicos() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/servicos?page=${page}&limit=6`,
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Não foi possível carregar os serviços.",
          );
        }

        setServicos(data.data ?? []);
        setTotalPages(data.pagination?.totalPages ?? 1);
      } catch (err) {
        setError(err.message || "Erro ao carregar os serviços.");
      } finally {
        setLoading(false);
      }
    }

    fetchServicos();
  }, [page]);

  const servicosAtivos = servicos.filter((servico) => servico.ativo != false);

  return (
    <>
      <section className="servicos-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Serviços</span>

            <h2>Conheça nossos principais serviços</h2>

            <p>
              Soluções profissionais em elétrica e climatização com qualidade,
              segurança e rapidez.
            </p>
          </div>
          {loading ? (
            <div className="servicos-state">Carregando serviços...</div>
          ) : error ? (
            <div className="servicos-state servicos-state-error">
              Não foi possivel carregar os serviços {error}
            </div>
          ) : servicosAtivos.length > 0 ? (
            <div className="servicos-grid">
              {servicosAtivos.map((servico) => (
                <ServiceCard
                  key={servico.id}
                  servico={servico}
                  onOpen={setSelectedService}
                />
              ))}
            </div>
          ) : (
            <div className="servicos-state">Nenhum serviço encontrado.</div>
          )}
        </div>
      </section>

      {servicosAtivos.length > 0 ? (
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

      <ServiceModal
        servico={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}

export default ServicosList;
