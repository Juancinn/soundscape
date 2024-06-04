import { useEffect } from "react";
import useStore from "@/contexts/Store";

const decodeJwt = (token: string): any => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Failed to decode JWT", error);
    return null;
  }
};

const useAuth = () => {
  const { setUser } = useStore();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = decodeJwt(token);
      if (decoded) {
        setUser({
          id: decoded.userId,
          username: decoded.username,
          email: decoded.email,
          password: "",
        });
      }
    }
  }, [setUser]);
};

export default useAuth;
