import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      setError("Complete all form fields.");
    } else if (firstName.length < 2 || lastName.length < 2) {
      setError("First Name and Last Name must contain at least 2 letters.");
    } else {
      setError(null);
      setMessage(true);
    }
  };

  const closeError = () => {
    setError(null);
  };

  const closeMessage = () => {
    setMessage(null);
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <div className="bg-white w-96 border rounded-lg border-gray-300 shadow-md p-6 m-auto font-montserrat">
      {error && <ErrorMessage message={error} onClose={closeError} />}
      {message && (
        <SuccessMessage
          firstName={firstName}
          lastName={lastName}
          onClose={closeMessage}
        />
      )}
      <h1 className="text-center text-3xl max-sm:text-2xl font-bold mt-3 mb-4">
        Registration Form
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="my-label">First Name:</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          className="my-input"
          required
        />
        <label className="my-label">Last Name:</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          className="my-input"
          required
        />
        <label className="my-label">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="my-input"
          required
        />
        <button
          className="mt-6 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
