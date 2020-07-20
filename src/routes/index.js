import React from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useAuth } from "../contexts/AuthProvider";
import Loading from "../components/loading/Loading";

export default function Routes() {
  const { signed, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return signed ? <AuthRoutes /> : <AppRoutes />;
}
