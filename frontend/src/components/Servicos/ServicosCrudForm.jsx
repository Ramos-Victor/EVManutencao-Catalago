import { useState, useEffect } from "react";
import "../../styles/servicos-form.css";
export default function ServicosCrudForm({ servico, onSave, onCancel }) {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    ativo: true,
    ...servico,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (servico) {
      setForm({ ...servico });
    }
  }, [servico]);
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await onSave(form);
    } catch (err) {
      setError(err.message || "Erro ao salvar serviço.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="servicos-form-wrapper">
      {" "}
      <form className="servicos-form" onSubmit={handleSubmit}>
        {" "}
        <div className="servicos-form-header">
          {" "}
          <h2> {servico ? "Editar Serviço" : "Novo Serviço"} </h2>{" "}
          <p> Gerencie os dados do serviço </p>{" "}
        </div>{" "}
        <div className="servicos-form-group">
          {" "}
          <label>Nome do Serviço</label>{" "}
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Digite o nome do serviço"
            required
          />{" "}
        </div>{" "}
        <div className="servicos-form-group">
          {" "}
          <label>Descrição</label>{" "}
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            placeholder="Descreva o serviço"
            rows={5}
            required
          />{" "}
        </div>{" "}
        <div className="servicos-checkbox">
          {" "}
          <label>
            {" "}
            <input
              type="checkbox"
              name="ativo"
              checked={!!form.ativo}
              onChange={handleChange}
            />{" "}
            Serviço ativo{" "}
          </label>{" "}
        </div>{" "}
        {error && <div className="servicos-error"> {error} </div>}{" "}
        <div className="servicos-actions">
          {" "}
          <button
            type="submit"
            className="servicos-btn-primary"
            disabled={loading}
          >
            {" "}
            {loading ? "Salvando..." : "Salvar Serviço"}{" "}
          </button>{" "}
          <button
            type="button"
            className="servicos-btn-outline"
            onClick={onCancel}
            disabled={loading}
          >
            {" "}
            Cancelar{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}
