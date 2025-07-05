import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated login
    if (email && password) {
      localStorage.setItem("token", "");
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
            Login
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <a href="/admin/forgot-password" className="text-green-700 hover:underline">
            Forgot password?
          </a>
          <a href="/admin/signup" className="text-gray-600 hover:underline">
            Create account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
