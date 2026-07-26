import StatCard from "./StatCard";

const stats = [
  {
    value: "300+",
    label: "Enterprise Clients",
  },
  {
    value: "10K+",
    label: "Professionals Trained",
  },
  {
    value: "95%",
    label: "Completion Rate",
  },
  {
    value: "4.8★",
    label: "Learner Rating",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-gray-900 text-4xl font-bold text-center">
          Trusted by Leading Enterprises
        </h2>

        <p className="text-gray-600 text-center mt-4 mb-14">
          Helping organizations build future-ready teams.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>

      </div>
    </section>
  );
}