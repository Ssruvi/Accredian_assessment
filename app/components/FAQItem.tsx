"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-semibold text-gray-900">
          {question}
        </span>

        <span className="text-2xl text-blue-600">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <p className="mt-4 text-gray-600">
          {answer}
        </p>
      )}
    </div>
  );
}