# Event Palace — Express Backend

Lightweight Node.js / Express backend for the **Event Palace** theme preview feature.
Uses `sharp` for server-side image compositing and serves SVG-generated placeholder assets.

## Quick Start

```bash
cd backend
npm install
npm start
```

Server runs on **http://localhost:5000**

---

## Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/api/venues` | List all venues |
| GET | `/api/themes` | List all themes |
| GET | `/api/theme/:id/overlay-config` | CSS/canvas positioning metadata for a theme |
| POST | `/api/preview/venue` | `{ venueId, themeId }` → composited preview image URL |

---

## File Structure

```
backend/
  server.js       ← Express app with all 4 endpoints
  db.json         ← Flat JSON store (venues + themes)
  package.json    ← Dependencies: express, cors, sharp
  assets/
    venues/       ← Venue base images (auto-generated on first run)
    themes/       ← Overlay PNGs per theme (auto-generated on first run)
    previews/     ← Server-composited output images (created on demand)
```

---

## Two Preview Modes

### Static Preview (POST /api/preview/venue)
Loads venue image + theme overlays → composites using `sharp` → returns `previewUrl`.

### Live Camera (GET /api/theme/:id/overlay-config)
Returns `overlays[]` with percentage-based positions. The Next.js frontend (`/event-palace`) uses `getUserMedia()` + CSS absolute positioning to overlay the assets on the webcam feed — **zero server involvement per frame**.
