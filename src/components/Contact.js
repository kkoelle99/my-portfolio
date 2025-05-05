import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("All fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }
    setFormError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000); // Simulate a delay
  };

  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Contact</h2>
      {formError && <p className="text-red-500 text-center">{formError}</p>}
      {successMessage && (
        <p className="text-green-500 text-center">{successMessage}</p>
      )}
      <form onSubmit={handleSubmit} className="mt-4 max-w-lg mx-auto">
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name (e.g., John Doe)"
            value={formData.name}
            onChange={handleChange}
            className="block w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Your Email (e.g., john@example.com)"
            value={formData.email}
            onChange={handleChange}
            className="block w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="block w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
