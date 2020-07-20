import React, { useContext, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}
export default function AuthProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadingStorageData() {
      const storageSigned = await AsyncStorage.getItem("@GE:signed");
      if (storageSigned) {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
        setSigned(JSON.parse(storageSigned));
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    }
    loadingStorageData();
  }, []);

  async function signIn() {
    setSigned(true);
    await AsyncStorage.setItem("@GE:signed", JSON.stringify(true));
  }

  async function signOut() {
    setSigned(false);
    await AsyncStorage.setItem("@GE:signed", JSON.stringify(false));
  }
  return (
    <AuthContext.Provider value={{ signed, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
