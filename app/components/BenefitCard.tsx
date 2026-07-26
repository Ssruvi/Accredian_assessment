interface BenefitCardProps {
  title: string;
  description: string;
}

export default function BenefitCard({
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300">
      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
        ✓
      </div>

      <h3 className="text-xl font-semibold mt-6 text-gray-800">
        {title}
      </h3>

      <p className="text-gray-600 mt-3 text-gray-600 leading-7">
        {description}
      </p>
    </div>
  );
}