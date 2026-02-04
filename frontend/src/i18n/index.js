import { createContext, useContext, useMemo, useState } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      store: 'Store',
      blog: 'Blog',
      admin: 'Admin'
    },
    hero: {
      title: 'Pharmacy Community CMS',
      subtitle: 'Scalable platform for pharmacy commerce, content, and operations.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      store: 'المتجر',
      blog: 'المدونة',
      admin: 'لوحة التحكم'
    },
    hero: {
      title: 'نظام إدارة محتوى مجتمع الصيدليات',
      subtitle: 'منصة قابلة للتوسع للتجارة والمحتوى والعمليات.'
    }
  }
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  const value = useMemo(() => {
    return {
      locale,
      dir: locale === 'ar' ? 'rtl' : 'ltr',
      t: translations[locale],
      setLocale
    };
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
