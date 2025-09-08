import { useState, useEffect } from "react";

export default function ClientForm2({ mode = "add", client_id }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(mode === "edit");

  useEffect(() => {
    if (mode === "edit" && client_id) {
      const fetchClient = async () => {
        try {
          const response = await fetch(
            `http://localhost:5000/api/clients/${client_id}`,
          );
          if (!response.ok) throw new Error("Failed to fetch client");
          const data = await response.json();
          setFormData({
            name: data.name || "",
            email: data.email || "",
            phone: data.phone || "",
          });
        } catch (error) {
          console.error(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchClient();
    }
  }, [mode, client_id]);

  const handlers = {
    add: async (data) => {
      return fetch(`http://localhost:5000/api/clients`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    },
    edit: async (data, client_id) => {
      return fetch(`http://localhost:5000/api/clients/${client_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await handlers[mode](formData, client_id);
      if (!response.ok) throw new Error("Failed to save client");
    } catch (error) {
      console.error(error.message);
    }
  };

  if (!loading) return <p>Loading client data...</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="tel"
        name="phone"
        placeholder="phone"
        value={formData.phone}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {mode === "edit" ? "update client" : "add client"}
      </button>
    </form>
  );
}
