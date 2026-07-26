import ProgramCard from "./ProgramCard";

const programs = [
  {
    title: "Data Science",
    description: "Master analytics, machine learning and AI with industry projects.",
  },
  {
    title: "Cyber Security",
    description: "Build expertise in ethical hacking, cloud security and risk management.",
  },
  {
    title: "Cloud Computing",
    description: "Learn AWS, Azure and DevOps for enterprise-scale deployments.",
  },
];

export default function Categories() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Popular Programs
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14">
          Choose from our most in-demand enterprise learning programs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}