import { useState, useEffect } from "react";
import "../../styles/produtos-form.css";
export default function ProdutosCrudForm({ produto, onSave, onCancel }) {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    ativo: true,
    ...produto,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (produto) {
      setForm({ ...produto });
    }
  }, [produto]);
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
      setError(err.message || "Erro ao salvar produto.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="produtos-form-wrapper">
      {" "}
      <form className="produtos-form" onSubmit={handleSubmit}>
        {" "}
        <div className="produtos-form-header">
          {" "}
          <h2> {produto ? "Editar Produto" : "Novo Produto"} </h2>{" "}
          <p> Gerencie os dados do produto </p>{" "}
        </div>{" "}
        <div className="produtos-form-group">
          {" "}
          <label>Nome do Produto</label>{" "}
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Digite o nome do produto"
            required
          />{" "}
        </div>{" "}
        <div className="produtos-form-group">
          {" "}
          <label>Descrição</label>{" "}
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            placeholder="Descreva o produto"
            rows={5}
            required
          />{" "}
        </div>{" "}
        <div className="produtos-checkbox">
          {" "}
          <label>
            {" "}
            <input
              type="checkbox"
              name="ativo"
              checked={!!form.ativo}
              onChange={handleChange}
            />{" "}
            Produto ativo{" "}
          </label>{" "}
        </div>{" "}
        {error && <div className="produtos-error"> {error} </div>}{" "}
        <div className="produtos-actions">
          {" "}
          <button
            type="submit"
            className="produtos-btn-primary"
            disabled={loading}
          >
            {" "}
            {loading ? "Salvando..." : "Salvar Produto"}{" "}
          </button>{" "}
          <button
            type="button"
            className="produtos-btn-outline"
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
