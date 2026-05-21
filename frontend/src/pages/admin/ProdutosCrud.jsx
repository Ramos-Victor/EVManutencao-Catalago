import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../context/AuthContext";

import ProdutosCrudList from "../../components/Produtos/ProdutosCrudList";
import ProdutosCrudForm from "../../components/Produtos/ProdutosCrudForm";

import ConfirmModal from "../../components/UI/confirm-modal";

export default function ProdutosCrud() {
  const { token } = useAuth();

  const [editing, setEditing] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [refresh, setRefresh] = useState(0);

  const [deleteModal, setDeleteModal] = useState(false);

  const [selectedProduto, setSelectedProduto] = useState(null);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSave(produto) {
    const method = produto.id ? "PUT" : "POST";

    const url = `${import.meta.env.VITE_API_URL}/api/produtos${
      produto.id ? "/" + produto.id : ""
    }`;

    const res = await fetch(url, {
      method,

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(produto),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Erro ao salvar produto.");
    }

    setShowForm(false);

    setEditing(null);

    setRefresh((r) => r + 1);
  }

  function handleDelete(produto) {
    setSelectedProduto(produto);

    setDeleteModal(true);
  }

  async function confirmDelete() {
    if (!selectedProduto) return;

    try {
      setDeleteLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/produtos/${selectedProduto.id}`,
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

      setSelectedProduto(null);
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

      <h2>Produtos - Administração</h2>

      {showForm ? (
        <ProdutosCrudForm
          produto={editing}
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
            Novo Produto
          </button>

          <ProdutosCrudList
            key={refresh}
            onEdit={(p) => {
              setEditing(p);

              setShowForm(true);
            }}
            onDelete={handleDelete}
            token={token}
          />
        </>
      )}

      <ConfirmModal
        open={deleteModal}
        title="Excluir produto"
        message={`Deseja realmente excluir o produto "${selectedProduto?.nome}"?`}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteModal(false)}
        loading={deleteLoading}
      />
    </div>
  );
}
