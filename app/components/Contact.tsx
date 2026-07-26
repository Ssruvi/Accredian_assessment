"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        company,
      }),
    });

    const data = await response.json();

    alert(data.message);

    setName("");
    setEmail("");
    setCompany("");
  }

  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Upskill Your Team?
        </h2>

        <p className="mt-4 text-lg text-blue-100">
          Connect with our experts today.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-xl mx-auto space-y-4"
        >

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-lg text-gray-900 bg-white"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-lg text-gray-900 bg-white"
          />

          <input
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full p-4 rounded-lg text-gray-900 bg-white"
          />

          <button
            type="submit"
            className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100"
          >
            Request Callback
          </button>

        </form>

      </div>
    </section>
  );
}