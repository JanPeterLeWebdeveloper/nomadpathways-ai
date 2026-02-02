"use client";

import { useT } from "@/i18n/useT";

export default function Footer() {
  const { t } = useT();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold">NomadPathways</h3>
            <p className="mt-4 text-sm text-gray-400">
              {t("landing.footer.tagline")}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">{t("landing.footer.product")}</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("nav.features")}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("nav.pricing")}
                </a>
              </li>
              <li>
                <a href="#roles" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("nav.roles")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">{t("landing.footer.legal")}</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="/impressum" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("landing.footer.impressum")}
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("landing.footer.datenschutz")}
                </a>
              </li>
              <li>
                <a href="/agb" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("landing.footer.agb")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} NomadPathways. {t("landing.footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
