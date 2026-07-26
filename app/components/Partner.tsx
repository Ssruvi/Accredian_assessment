import PartnerCard from "./PartnerCard";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Infosys",
  "TCS",
  "Accenture",
  "IBM",
  "Deloitte",
];

export default function Partners() {
  return (
    <section id="enterprise" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Trusted by Leading Companies
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Join thousands of professionals from top organizations.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company) => (
            <PartnerCard
              key={company}
              company={company}
            />
          ))}
        </div>

      </div>
    </section>
  );
}