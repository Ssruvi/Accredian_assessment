export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Enterprise Learning Solutions
          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight text-gray-900">
            Upskill Your Workforce
            <br />
            Build Future-Ready Teams
          </h1>

          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate business growth through industry-recognized
            certification programs designed for enterprises.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">
              Get Started
            </button>

            <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition">
              Explore Programs
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}