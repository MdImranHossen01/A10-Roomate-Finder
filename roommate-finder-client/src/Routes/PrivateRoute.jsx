import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext"; // Update path if needed

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    // Wait until Firebase auth state is resolved
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!user) {
    // Redirect if not authenticated
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // Render protected route
  return children;
};

export default PrivateRoute;
