import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Who are these programs for?",
    answer:
      "Our programs are designed for students, professionals and enterprise teams looking to upskill.",
  },
  {
    question: "Are the programs online?",
    answer:
      "Yes, all programs are delivered online with mentorship and hands-on projects.",
  },
  {
    question: "Do I receive a certificate?",
    answer:
      "Yes, learners receive an industry-recognized certificate after successful completion.",
  },
  {
    question: "Can enterprises enroll teams?",
    answer:
      "Yes, we provide customized enterprise learning solutions for organizations.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-10">
          Everything you need to know before getting started.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

      </div>
    </section>
  );
}