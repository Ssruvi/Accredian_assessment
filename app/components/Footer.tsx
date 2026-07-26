export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between flex-wrap gap-10">

          <div>
            <h2 className="text-3xl font-bold text-white">
              Accredian
            </h2>

            <p className="mt-3 max-w-sm">
              Empowering enterprises with world-class learning
              solutions and industry-ready talent.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>Programs</li>
              <li>Enterprise</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-sm">
          © 2026 Accredian. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}