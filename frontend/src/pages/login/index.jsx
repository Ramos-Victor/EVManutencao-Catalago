import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Loader from "../../components/UI/Loader";

import "../../styles/global.css";
import "../../styles/login.css";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: email,
            senha: password,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Credenciais inválidas.");
      }

      login(data.token);

      navigate("/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {loading && <Loader />}

      <div className="login-overlay"></div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-header">
          <h2 className="login-title">
            <span>EV</span> MANUTENÇÃO
          </h2>

          <p>Painel Administrativo</p>
        </div>

        <div className="form-group">
          <label htmlFor="email">Usuário</label>

          <input
            id="email"
            type="text"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            placeholder="Digite seu usuário"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>

          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            placeholder="Digite sua senha"
          />
        </div>

        {error && <div className="form-error">{error}</div>}

        <button className="btn-login" type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

export default Login;
