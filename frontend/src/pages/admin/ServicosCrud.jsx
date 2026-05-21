import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../context/AuthContext";

import ServicosCrudList from "../../components/Servicos/ServicosCrudList";
import ServicosCrudForm from "../../components/Servicos/ServicosCrudForm";

import ConfirmModal from "../../components/UI/confirm-modal";

export default function ServicosCrud() {
  const { token } = useAuth();

  const [editing, setEditing] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [refresh, setRefresh] = useState(0);

  const [deleteModal, setDeleteModal] = useState(false);

  const [selectedServico, setSelectedServico] = useState(null);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSave(servico) {
    const method = servico.id ? "PUT" : "POST";
    const url = `${import.meta.env.VITE_API_URL}/api/servicos${servico.id ? "/" + servico.id : ""}`;
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(servico),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Erro ao salvar serviço.");
    setShowForm(false);
    setEditing(null);
    setRefresh((r) => r + 1);
  }

  async function handleDelete(servico) {
    setSelectedServico(servico);

    setDeleteModal(true);
  }

  async function confirmDelete() {
    if (!selectedServico) return;

    try {
      setDeleteLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/servicos/${selectedServico.id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Erro ao excluir produto.");
      }

      setRefresh((r) => r + 1);

      setDeleteModal(false);

      setSelectedServico(null);
    } catch (err) {
      alert(err.message);
    } finally {
      setDeleteLoading(false);
    }
  }

  return (
    <div className="admin-crud-page">
      <button
        className="btn btn-outline"
        style={{ marginBottom: 18 }}
        onClick={() => navigate("/admin")}
      >
        &larr; Voltar para o início
      </button>
      <h2>Serviços - Administração</h2>
      {showForm ? (
        <ServicosCrudForm
          servico={editing}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditing(null);
          }}
        />
      ) : (
        <>
          <button
            className="btn btn-primary"
            onClick={() => {
              setEditing(null);
              setShowForm(true);
            }}
          >
            Novo Serviço
          </button>
          <ServicosCrudList
            key={refresh}
            onEdit={(s) => {
              setEditing(s);
              setShowForm(true);
            }}
            onDelete={handleDelete}
            token={token}
          />
        </>
      )}

      <ConfirmModal
        open={deleteModal}
        title="Excluir servico"
        message={`Deseja realmente excluir o servico "${selectedServico?.nome}"?`}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteModal(false)}
        loading={deleteLoading}
      />
    </div>
  );
}
