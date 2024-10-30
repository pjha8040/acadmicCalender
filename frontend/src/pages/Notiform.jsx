import { useState } from "react";

const NotificationForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Notification will be sent to ${email}`);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Notification Form</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NotificationForm;
