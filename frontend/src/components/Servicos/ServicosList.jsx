import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";

function ServicosList() {
  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    async function fetchServicos() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/servicos`,
        );

        const json = await response.json();

        if (!response.ok) {
          throw new Error(
            json.message || "Não foi possível carregar os serviços.",
          );
        }

        setServicos(json?.data ?? []);
      } catch (err) {
        setError(err.message || "Erro ao carregar os serviços.");
      } finally {
        setLoading(false);
      }
    }

    fetchServicos();
  }, []);

  if (loading) {
    return (
      <section className="servicos-section">
        <div className="container">
          <div className="servicos-state">Carregando serviços...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="servicos-section">
        <div className="container">
          <div className="servicos-state servicos-state-error">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="servicos-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Serviços</span>

            <h2>Conheça nossos principais atendimentos</h2>

            <p>
              Soluções profissionais em elétrica e climatização com qualidade,
              segurança e rapidez.
            </p>
          </div>

          {servicos.length > 0 ? (
            <div className="servicos-grid">
              {servicos.map((servico) => (
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

      <ServiceModal
        servico={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}

export default ServicosList;
