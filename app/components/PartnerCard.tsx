interface PartnerCardProps {
  company: string;
}

export default function PartnerCard({ company }: PartnerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300">
      <span className="text-lg font-semibold text-gray-700">
        {company}
      </span>
    </div>
  );
}