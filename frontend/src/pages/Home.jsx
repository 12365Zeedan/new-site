import { useLanguage } from '../i18n/index.js';

const Home = () => {
  const { t } = useLanguage();

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-semibold text-brand-700">{t.hero.title}</h1>
      <p className="mt-3 max-w-2xl text-base text-slate-600">{t.hero.subtitle}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          {
            title: 'Commerce-ready',
            body: 'Catalog, pricing, and order APIs ready for integrations.'
          },
          {
            title: 'Content + Community',
            body: 'Localized blog engine with moderation workflow.'
          },
          {
            title: 'Operations visibility',
            body: 'Role-based dashboards for pharmacists and admins.'
          }
        ].map((card) => (
          <div key={card.title} className="rounded-2xl border border-slate-200 p-4">
            <p className="text-sm font-semibold text-slate-800">{card.title}</p>
            <p className="mt-2 text-sm text-slate-600">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
