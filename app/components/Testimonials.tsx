import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    review:
      "The learning experience was structured and practical. It helped me grow professionally.",
  },
  {
    name: "Priya Patel",
    role: "Data Analyst",
    review:
      "Excellent mentors, real-world projects and amazing support throughout the course.",
  },
  {
    name: "Aman Verma",
    role: "Cyber Security Associate",
    review:
      "Highly recommend Accredian for anyone looking to upskill in tech.",
  },
];

export default function Testimonials() {
  return (
    <section id= "success-stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          What Our Learners Say
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Hear from professionals who transformed their careers.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              name={item.name}
              role={item.role}
              review={item.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}