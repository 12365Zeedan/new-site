import { useLanguage } from '../i18n/index.js';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className={`rounded-full border px-3 py-1 text-sm ${
          locale === 'en' ? 'border-brand-500 bg-brand-500 text-white' : 'border-slate-200'
        }`}
        onClick={() => setLocale('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={`rounded-full border px-3 py-1 text-sm ${
          locale === 'ar' ? 'border-brand-500 bg-brand-500 text-white' : 'border-slate-200'
        }`}
        onClick={() => setLocale('ar')}
      >
        عربي
      </button>
    </div>
  );
};

export default LanguageSwitcher;
