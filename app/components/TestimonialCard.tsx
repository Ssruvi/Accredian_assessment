interface TestimonialCardProps {
  name: string;
  role: string;
  review: string;
}

export default function TestimonialCard({
  name,
  role,
  review,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
      <p className="text-gray-600 italic">"{review}"</p>

      <div className="mt-6">
        <h3 className="font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}