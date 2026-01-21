export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold">NomadPathways</h3>
            <p className="mt-4 text-sm text-gray-400">
              Your guided path to digital freedom. Learn, grow, and thrive as a digital nomad.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Product</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#roles" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Roles
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Legal</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="/impressum" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="/agb" className="text-sm text-gray-400 hover:text-white transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} NomadPathways. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
