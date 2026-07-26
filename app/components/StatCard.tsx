interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
      <h2 className="text-4xl font-bold text-blue-600">{value}</h2>
      <p className="mt-3 text-gray-600">{label}</p>
    </div>
  );
}