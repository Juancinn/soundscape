import { useState } from "react";
import { useRouter } from "next/router";
import useStore from "@/contexts/Store";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const setUser = useStore((state) => state.setUser);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send email instead of username
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setUser({
          id: data.id,
          username: data.username,
          email: data.email,
          password: "",
        });
        router.push("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("Failed to fetch");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="btn btn-primary">
        Login
      </button>
      <div>
        <p>
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500">
            Register here
          </a>
          .
        </p>
      </div>
    </form>
  );
};

export default LogInForm;
