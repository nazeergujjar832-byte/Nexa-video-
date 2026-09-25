# NexaVideo - Android + Backend + PostgreSQL - Runnable MVP Foundation

> ⚠️ IMPORTANT: This project is **NOT claimed to be already live or published**. It is a consolidated, runnable development / MVP source package intended for testing and continued production integration. (As per original README.md)

### What is runnable now
- **Backend:** Node.js + Express + PostgreSQL. Health check APIs working.
- **Android:** Jetpack Compose app with login/register, Home feed, Shorts, Create, Inbox and Profile shells connected to the API via `http://10.0.2.2:8080/` (Emulator URL)
- **Database:** PostgreSQL schema with full tables:
    - users, profiles, videos, shorts, comments, comment_likes
    - video_views, video_likes, follows, saved_videos, blocks
    - playlists, playlist_items, notifications, messages
    - refresh_tokens, creator_accounts, creator_payouts, earnings_ledger
    - reports, moderation_actions, ads, audit_logs
- **Docker:** PostgreSQL + API + persistent local upload volume via `infrastructure/docker-compose.yml`
- **Test:** `scripts/smoke.sh` -> curl http://localhost:8080/health

### Feature Status (From FEATURE_MATRIX.md)
| Area | Status in this package |
| Android navigation/UI foundation | Scaffolded |
| Backend API | Scaffolded |
| PostgreSQL schema | Core schema included |
| Authentication | API placeholders; production implementation required |
| Video upload/storage | Architecture + API placeholder |
| Feed/player | UI foundation + API placeholder |
| Shorts / Social / Notifications / Chat | Schema/roadmap foundation |

### Master Roadmap (20 Phases)
Already designed (1-60): product foundation, UI/UX, auth, upload, feed, Shorts, social, Creator Studio, Live, search, messaging, AI, monetization, admin/trust & safety, recommendation.

Current implementation track (61+): Convert blueprint into tested source code.

Core order: 1. Android shell, 2. Backend/API/Postgres, 3. Auth/session/OTP, 4. Object storage/resumable upload, 5. Transcoding/CDN, 6. Feed/player/watch events, 7. Shorts, 8. Social graph/comments/saves/shares, 9. Notifications/realtime, 10. Creator Studio/analytics, 11. Live streaming, 12. Search/discovery, 13. Messaging, 14. AI gateway, 15. Billing/creator earnings/ads, 16. Admin/trust & safety, 17. Data/recommendation, 18. Localization/a11y/perf, 19. Security/QA/monitoring/backup, 20. Production deploy & Play release

### Quick Local Test
1. Install Docker Desktop and Android Studio
2. From `infrastructure/`, run `docker compose up --build`
3. API health: `http://localhost:8080/health` should return database `ok`
4. Open `android/` in Android Studio, let Gradle sync, run on emulator. API base URL is `http://10.0.2.2:8080/`
5. Create an account in the app, then Home screen requests real PostgreSQL-backed feed.

### Production dependencies still needed
Cloud account, object storage, CDN, database hosting, domain/TLS, push provider, streaming infra, payment providers, AI providers, Google Play Console and signing credentials, email/SMS verification, monitoring/logging, secrets management.

Backend smoke/contract tests should run with `npm test` after adding integration fixtures.
