import BenefitCard from "./BenefitCard";

const benefits = [
  {
    title: "Industry Expert Mentors",
    description:
      "Learn from experienced professionals working at top global companies.",
  },
  {
    title: "Flexible Learning",
    description:
      "Self-paced learning with live mentorship sessions and dedicated support.",
  },
  {
    title: "Hands-on Projects",
    description:
      "Work on real-world case studies and practical assignments.",
  },
  {
    title: "Recognized Certifications",
    description:
      "Earn certificates valued by leading enterprises across industries.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Why Choose Accredian?
        </h2>

        <p className="text-gray-600 text-center mt-4 mb-14">
          Everything your workforce needs to stay ahead.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item) => (
            <BenefitCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}