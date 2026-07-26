interface ProgramCardProps {
  title: string;
  description: string;
}

export default function ProgramCard({
  title,
  description,
}: ProgramCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-700"></div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}