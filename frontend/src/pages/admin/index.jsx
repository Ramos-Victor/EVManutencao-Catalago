import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/global.css";
import "../../styles/admin.css";

function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const isAdminHome = location.pathname === "/admin";

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <div className="admin-header-content">
          <span>Administração</span>
          {!isAdminHome && (
            <nav className="admin-nav">
              <NavLink
                to="/admin/produtos"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Produtos
              </NavLink>
              <NavLink
                to="/admin/servicos"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Serviços
              </NavLink>
            </nav>
          )}
          <button
            className="btn btn-outline"
            onClick={handleLogout}
            style={{ textAlign: "center" }}
          >
            Sair
          </button>
        </div>
      </header>
      <main>
        {isAdminHome ? (
          <section className="admin-home">
            <h1>Bem-vindo ao Painel Administrativo</h1>
            <p className="admin-home-desc">
              Gerencie produtos e serviços do sistema de forma prática e segura.
            </p>
            <div className="admin-home-actions">
              <NavLink to="/admin/produtos" className="admin-home-card">
                <i className="fas fa-box-open"></i>
                <span>Gerenciar Produtos</span>
              </NavLink>
              <NavLink to="/admin/servicos" className="admin-home-card">
                <i className="fas fa-tools"></i>
                <span>Gerenciar Serviços</span>
              </NavLink>
            </div>
          </section>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}

export default AdminLayout;
