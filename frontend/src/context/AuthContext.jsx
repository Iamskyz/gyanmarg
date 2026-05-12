import { createContext, useContext, useState, useEffect } from "react";
import API from "../utils/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("gyanmarg_user");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.token && isTokenExpired(parsed.token)) {
        localStorage.removeItem("gyanmarg_user");
        setLoading(false);
        return;
      }
      setUser(parsed);
      API.get("/auth/profile")
        .then(({ data }) => {
          const fresh = { ...parsed, ...data, token: parsed.token };
          localStorage.setItem("gyanmarg_user", JSON.stringify(fresh));
          setUser(fresh);
        })
        .catch(() => {
          localStorage.removeItem("gyanmarg_user");
          setUser(null);
        });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const { data } = await API.post("/auth/login", { email, password });
    localStorage.setItem("gyanmarg_user", JSON.stringify(data));
    setUser(data);
    // Notify language context
    window.dispatchEvent(new Event("user-updated"));
    return data;
  };

  const register = async (formData) => {
    const { data } = await API.post("/auth/register", formData);
    return data;
  };

  const logout = () => {
    localStorage.removeItem("gyanmarg_user");
    setUser(null);
    window.dispatchEvent(new Event("user-updated"));
  };

  const updateUser = (updatedData) => {
    const newUser = { ...user, ...updatedData };
    localStorage.setItem("gyanmarg_user", JSON.stringify(newUser));
    setUser(newUser);
    window.dispatchEvent(new Event("user-updated"));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
