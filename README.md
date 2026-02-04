# Pharmacy Community CMS

Production-ready starter for a scalable Pharmacy Community CMS platform.

## Architecture (brief)
- **Backend (Express + MongoDB)**: REST API with JWT auth, separated by layers (routes → controllers → models/services). This keeps endpoints slim and makes it easier to integrate with other platforms later (WordPress/Shopify/Salla). Bilingual fields are modeled directly in Mongo to keep content localized without duplicating schemas.
- **Frontend (React + Tailwind)**: Lightweight layout shell with routing and a tiny i18n context for RTL/LTR switching. This keeps the UI flexible for future design iterations and supports localization early.
- **Auth**: JWT-based with role checks so admin, editor, and customer access can be expanded over time.

## Getting started
### Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Next steps
- Add validation schemas for products/posts.
- Add admin workflows (approvals, moderation, inventory).
- Add integration adapters for WordPress, Shopify, and Salla.
