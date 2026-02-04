import { NavLink } from 'react-router-dom';
import { LanguageProvider, useLanguage } from '../i18n/index.js';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const Navigation = () => {
  const { t } = useLanguage();
  const navItems = [
    { to: '/', label: t.nav.home },
    { to: '/store', label: t.nav.store },
    { to: '/blog', label: t.nav.blog },
    { to: '/admin', label: t.nav.admin }
  ];

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <p className="text-lg font-semibold text-brand-700">Pharmacy CMS</p>
        <p className="text-xs text-slate-500">Community-ready platform</p>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `rounded-full px-3 py-1 ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      <LanguageSwitcher />
    </nav>
  );
};

const LayoutFrame = ({ children }) => {
  const { dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8">
        {children}
      </main>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <LayoutFrame>{children}</LayoutFrame>
    </LanguageProvider>
  );
};

export default Layout;
