const express = require('express');
const cors    = require('cors');
const fs      = require('fs');
const path    = require('path');
const sharp   = require('sharp');
const multer  = require('multer');

const app  = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// ── Multer: accept venue photo uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const dir = path.join(__dirname, 'assets', 'uploads');
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      cb(null, dir);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname) || '.jpg';
      cb(null, `upload-${Date.now()}${ext}`);
    }
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Images only'));
  }
});

function getDb() {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8'));
}

async function ensureDir(d) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

// ──────────────────────────────────────────────────────────
// SVG Overlay Generators — unique style per theme category
// ──────────────────────────────────────────────────────────

function svgDrape(color, style = 'classic') {
  const c = color;
  switch (style) {
    case 'beach':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="180">
        <path d="M0,0 Q100,80 200,20 Q300,80 400,10 Q500,80 600,20 Q700,80 800,10 L800,60 Q700,110 600,70 Q500,110 400,55 Q300,110 200,70 Q100,110 0,60Z" fill="${c}" opacity="0.82"/>
      </svg>`;
    case 'neon':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="180">
        <rect width="800" height="6" fill="${c}" opacity="1"/>
        <rect y="20" width="800" height="4" fill="${c}" opacity="0.7"/>
        <rect y="38" width="800" height="3" fill="${c}" opacity="0.5"/>
        <rect y="52" width="800" height="2" fill="${c}" opacity="0.35"/>
        <rect y="63" width="800" height="1" fill="${c}" opacity="0.2"/>
      </svg>`;
    case 'stars':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="180">
        <rect width="800" height="80" fill="#0b132b" opacity="0.95"/>
        ${Array.from({length:20}).map((_,i)=>`<circle cx="${40*i+20}" cy="${20+Math.sin(i)*15}" r="2" fill="${c}" opacity="0.9"/>`).join('')}
        ${Array.from({length:14}).map((_,i)=>`<polygon points="${57*i+20},5 ${57*i+23},14 ${57*i+32},14 ${57*i+25},20 ${57*i+28},28 ${57*i+20},23 ${57*i+12},28 ${57*i+15},20 ${57*i+8},14 ${57*i+17},14" fill="${c}" opacity="0.7" transform="scale(0.6) translate(${57*i/0.6-57*i},0)"/>`).join('')}
      </svg>`;
    case 'carnival':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="180">
        ${Array.from({length:16}).map((_,i)=>`<polygon points="${50*i},0 ${50*i+25},0 ${50*i+12.5},50" fill="${i%3===0?color:i%3===1?'#fff':'#ff69b4'}" opacity="0.9"/>`).join('')}
        <rect y="50" width="800" height="8" fill="${c}" opacity="0.8"/>
      </svg>`;
    case 'festive':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="180">
        <path d="M0,0 L800,0 L800,40 Q600,90 400,40 Q200,90 0,40Z" fill="${c}" opacity="0.9"/>
        ${Array.from({length:24}).map((_,i)=>`<circle cx="${33*i+17}" cy="${i%2===0?10:25}" r="5" fill="${i%2===0?c:'#fff'}" opacity="0.95"/>`).join('')}
      </svg>`;
    default: // classic swag
      return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="180">
        <path d="M0,0 Q200,100 400,35 Q600,100 800,0 L800,55 Q600,140 400,75 Q200,140 0,55Z" fill="${c}" opacity="0.88"/>
      </svg>`;
  }
}

function svgArch(color, style = 'classic') {
  const c = color;
  switch (style) {
    case 'floral':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="480">
        <path d="M55,480 L55,185 Q200,10 345,185 L345,480 L305,480 L305,190 Q200,42 95,190 L95,480Z" fill="${c}" opacity="0.85"/>
        ${Array.from({length:8}).map((_,i)=>`<circle cx="${i%2===0?75:325}" cy="${160+i*36}" r="12" fill="#fff" opacity="0.7"/>`).join('')}
      </svg>`;
    case 'spiderweb':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="480">
        <path d="M55,480 L55,185 Q200,10 345,185 L345,480 L305,480 L305,190 Q200,42 95,190 L95,480Z" fill="${c}" opacity="0.9"/>
        <line x1="200" y1="50" x2="200" y2="480" stroke="#fff" stroke-width="2" opacity="0.5"/>
        <line x1="80" y1="200" x2="320" y2="200" stroke="#fff" stroke-width="2" opacity="0.5"/>
        <line x1="80" y1="300" x2="320" y2="300" stroke="#fff" stroke-width="2" opacity="0.5"/>
        <ellipse cx="200" cy="200" rx="120" ry="60" stroke="#fff" stroke-width="1.5" fill="none" opacity="0.5"/>
      </svg>`;
    case 'stars':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="480">
        <path d="M55,480 L55,185 Q200,10 345,185 L345,480 L305,480 L305,190 Q200,42 95,190 L95,480Z" fill="${c}" opacity="0.92"/>
        ${Array.from({length:12}).map((_,i)=>`<text x="${i%2===0?68:300}" y="${170+i*26}" font-size="18" fill="#fff" opacity="0.8">★</text>`).join('')}
      </svg>`;
    case 'tropical':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="480">
        <path d="M55,480 L55,185 Q200,10 345,185 L345,480 L305,480 L305,190 Q200,42 95,190 L95,480Z" fill="${c}" opacity="0.80"/>
        <ellipse cx="55" cy="300" rx="55" ry="120" fill="#2d9a4e" opacity="0.7" transform="rotate(-20, 55, 300)"/>
        <ellipse cx="345" cy="300" rx="55" ry="120" fill="#2d9a4e" opacity="0.7" transform="rotate(20, 345, 300)"/>
      </svg>`;
    case 'balloons':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="480">
        <path d="M55,480 L55,185 Q200,10 345,185 L345,480 L305,480 L305,190 Q200,42 95,190 L95,480Z" fill="${c}" opacity="0.75"/>
        ${Array.from({length:6}).map((_,i)=>`<ellipse cx="${i%2===0?80:320}" cy="${160+i*50}" rx="22" ry="28" fill="${['#ff69b4','#ff4500','#4169e1','#ffd700','#32cd32','#ff1493'][i]}" opacity="0.9"/>
          <line x1="${i%2===0?80:320}" y1="${183+i*50}" x2="${i%2===0?80:320}" y2="${210+i*50}" stroke="#fff" stroke-width="1.5"/>`).join('')}
      </svg>`;
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="480">
        <path d="M55,480 L55,185 Q200,10 345,185 L345,480 L305,480 L305,190 Q200,42 95,190 L95,480Z" fill="${c}" opacity="0.90"/>
      </svg>`;
  }
}

function svgLightWash(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
    <rect width="800" height="600" fill="${color}" opacity="0.14"/>
    <ellipse cx="400" cy="0" rx="350" ry="180" fill="${color}" opacity="0.10"/>
    <ellipse cx="400" cy="600" rx="300" ry="120" fill="${color}" opacity="0.06"/>
  </svg>`;
}

function svgTable(color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="200">
    <ellipse cx="320" cy="160" rx="270" ry="38" fill="${color}" opacity="0.92"/>
    <rect x="294" y="52" width="52" height="76" fill="#fff" opacity="0.95" rx="5"/>
    <circle cx="170" cy="152" r="25" fill="#fff" opacity="0.92"/>
    <circle cx="470" cy="152" r="25" fill="#fff" opacity="0.92"/>
    <circle cx="320" cy="52" r="10" fill="${color}" opacity="0.9"/>
    <line x1="320" y1="40" x2="320" y2="20" stroke="${color}" stroke-width="2"/>
  </svg>`;
}

// Map theme id → SVG style keys
const THEME_STYLES = {
  'royal-gold':          { drape: 'classic',  arch: 'classic',   },
  'destination-wedding': { drape: 'beach',    arch: 'tropical',  },
  'garden-romance':      { drape: 'festive',  arch: 'floral',    },
  'royal-palace':        { drape: 'classic',  arch: 'stars',     },
  'beach-wedding':       { drape: 'beach',    arch: 'tropical',  },
  'rustic-chic':         { drape: 'classic',  arch: 'floral',    },
  'mehndi-magic':        { drape: 'festive',  arch: 'floral',    },
  'sangeet-spectacle':   { drape: 'festive',  arch: 'balloons',  },
  'cocktail-glam':       { drape: 'classic',  arch: 'stars',     },
  'minimal-white':       { drape: 'classic',  arch: 'classic',   },
  'barbie-dreamworld':   { drape: 'carnival', arch: 'balloons',  },
  'spiderman-adventure': { drape: 'neon',     arch: 'spiderweb', },
  'cartoon-wonderland':  { drape: 'carnival', arch: 'balloons',  },
  'disney-princess':     { drape: 'festive',  arch: 'floral',    },
  'avengers-assemble':   { drape: 'neon',     arch: 'stars',     },
  'neon-glow':           { drape: 'neon',     arch: 'stars',     },
  'golden-birthday':     { drape: 'festive',  arch: 'stars',     },
  'under-the-sea':       { drape: 'beach',    arch: 'tropical',  },
  'safari-adventure':    { drape: 'classic',  arch: 'tropical',  },
  'boho-safari':         { drape: 'classic',  arch: 'floral',    },
  'celestial-dream':     { drape: 'stars',    arch: 'stars',     },
  'botanical-forest':    { drape: 'classic',  arch: 'floral',    },
  'rainbow-clouds':      { drape: 'festive',  arch: 'balloons',  },
  'elephant-joy':        { drape: 'festive',  arch: 'floral',    },
  'modern-luxury':       { drape: 'classic',  arch: 'classic',   },
  'awards-night':        { drape: 'classic',  arch: 'stars',     },
  'diwali-gala':         { drape: 'festive',  arch: 'floral',    },
  'christmas-winter':    { drape: 'carnival', arch: 'stars',     },
  'halloween-spooky':    { drape: 'neon',     arch: 'spiderweb', },
  'celestial-extra':     { drape: 'stars',    arch: 'stars',     },
};

// ── Generate all placeholder overlays ────────────────────
async function generatePlaceholders() {
  await ensureDir(path.join(__dirname, 'assets', 'previews'));
  await ensureDir(path.join(__dirname, 'assets', 'uploads'));
  const db = getDb();

  for (const theme of db.themes) {
    const tDir = path.join(__dirname, 'assets', 'themes', theme.id);
    await ensureDir(tDir);

    const style = THEME_STYLES[theme.id] || { drape: 'classic', arch: 'classic' };
    const color = theme.colorTint;

    const files = {
      'drape.png':      svgDrape(color, style.drape),
      'arch.png':       svgArch(color, style.arch),
      'light-wash.png': svgLightWash(color),
      'table.png':      svgTable(color)
    };

    for (const [filename, svg] of Object.entries(files)) {
      const fp = path.join(tDir, filename);
      if (!fs.existsSync(fp)) {
        await sharp(Buffer.from(svg)).png().toFile(fp);
      }
    }
  }
}

generatePlaceholders()
  .then(() => console.log(`✓ ${getDb().themes.length} theme overlays ready`))
  .catch(err => console.error('Asset gen error:', err));

// ──────────────────────────────────────────────────────────
// API Endpoints
// ──────────────────────────────────────────────────────────

app.get('/api/venues', (req, res) => {
  try { res.json(getDb().venues); }
  catch { res.status(500).json({ error: 'Failed to retrieve venues' }); }
});

app.get('/api/themes', (req, res) => {
  try { res.json(getDb().themes); }
  catch { res.status(500).json({ error: 'Failed to retrieve themes' }); }
});

app.get('/api/theme/:id/overlay-config', (req, res) => {
  try {
    const theme = getDb().themes.find(t => t.id === req.params.id);
    if (!theme) return res.status(404).json({ error: 'Theme not found' });
    res.json({
      themeId: theme.id, name: theme.name, colorTint: theme.colorTint,
      overlays: [
        { type: 'drape',        url: `/assets/themes/${theme.id}/drape.png`,      position: { left: 0, top: 0, width: 100, height: 30 } },
        { type: 'arch',         url: `/assets/themes/${theme.id}/arch.png`,       position: { left: 25, top: 20, width: 50, height: 80 } },
        { type: 'lighting',     url: `/assets/themes/${theme.id}/light-wash.png`, position: { left: 0, top: 0, width: 100, height: 100 } },
        { type: 'tableSetting', url: `/assets/themes/${theme.id}/table.png`,      position: { left: 10, top: 65, width: 80, height: 35 } }
      ]
    });
  } catch { res.status(500).json({ error: 'Config failed' }); }
});

// POST /api/preview/upload  ← MAIN ENDPOINT: user uploads photo + picks theme
app.post('/api/preview/upload', upload.single('venueImage'), async (req, res) => {
  const { themeId } = req.body;
  if (!req.file) return res.status(400).json({ error: 'No image uploaded' });
  if (!themeId)  return res.status(400).json({ error: 'Missing themeId' });

  try {
    const theme = getDb().themes.find(t => t.id === themeId);
    if (!theme) return res.status(404).json({ error: 'Theme not found' });

    const previewFile = `preview-${Date.now()}-${themeId}.jpg`;
    const previewPath = path.join(__dirname, 'assets', 'previews', previewFile);

    await compositeWithTheme(req.file.path, theme, previewPath);

    res.json({
      success: true,
      previewUrl: `/assets/previews/${previewFile}`,
      originalUrl: `/assets/uploads/${req.file.filename}`,
      themeName: theme.name,
      colorTint: theme.colorTint
    });
  } catch (err) {
    console.error('Upload composite error:', err);
    res.status(500).json({ error: 'Compositing failed: ' + err.message });
  }
});

// POST /api/preview/venue  ← composite from db venue
app.post('/api/preview/venue', async (req, res) => {
  const { venueId, themeId } = req.body;
  if (!venueId || !themeId) return res.status(400).json({ error: 'Missing params' });
  try {
    const db = getDb();
    const venue = db.venues.find(v => v.id === venueId);
    const theme = db.themes.find(t => t.id === themeId);
    if (!venue || !theme) return res.status(404).json({ error: 'Not found' });

    const previewFile = `preview-${venueId}-${themeId}.jpg`;
    const previewPath = path.join(__dirname, 'assets', 'previews', previewFile);
    await compositeWithTheme(path.join(__dirname, venue.imageUrl), theme, previewPath);

    res.json({ success: true, previewUrl: `/assets/previews/${previewFile}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// ── Sharp compositing helper ──────────────────────────────
async function compositeWithTheme(baseImgPath, theme, outputPath) {
  const base = await sharp(baseImgPath)
    .resize(1200, 800, { fit: 'cover', position: 'center' })
    .toBuffer();

  const themeDir = path.join(__dirname, 'assets', 'themes', theme.id);

  const [drapeB, archB, lightB, tableB] = await Promise.all([
    sharp(path.join(themeDir, 'drape.png')).resize(1200, 225, { fit: 'fill' }).toBuffer(),
    sharp(path.join(themeDir, 'arch.png')).resize(560, 620, { fit: 'fill' }).toBuffer(),
    sharp(path.join(themeDir, 'light-wash.png')).resize(1200, 800, { fit: 'fill' }).toBuffer(),
    sharp(path.join(themeDir, 'table.png')).resize(960, 266, { fit: 'fill' }).toBuffer()
  ]);

  await sharp(base)
    .composite([
      { input: archB,  top: 140, left: 320 },
      { input: drapeB, top: 0,   left: 0   },
      { input: tableB, top: 534, left: 120  },
      { input: lightB, top: 0,   left: 0   }
    ])
    .jpeg({ quality: 92 })
    .toFile(outputPath);
}

app.listen(PORT, () => console.log(`Event Palace backend → http://localhost:${PORT}`));
