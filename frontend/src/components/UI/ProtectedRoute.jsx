import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ children }) {
  const { token, loading } = useAuth();

  if (loading) return null; // Pode exibir um loader global
  if (!token) return <Navigate to="/login" replace />;
  return children;
}

export default ProtectedRoute;
