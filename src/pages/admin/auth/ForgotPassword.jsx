import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate email send
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>
        {submitted ? (
          <p className="text-green-700 text-center">
            If this email exists, a reset link has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
              Send Reset Link
            </button>
          </form>
        )}
        <p className="text-sm text-center mt-4">
          <a href="/admin/login" className="text-green-700 underline">
            Back to login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
