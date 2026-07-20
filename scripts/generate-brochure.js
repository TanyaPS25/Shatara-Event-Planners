const fs = require('fs');
const PDFDocument = require('pdfkit');

// Create a document
const doc = new PDFDocument({
  size: 'A4',
  margins: {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50
  }
});

// Output file path
const outPath = 'public/shatara-brochure.pdf';

// Make sure public directory exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

// Pipe its output somewhere, like to a file or HTTP response
doc.pipe(fs.createWriteStream(outPath));

// Colors
const bgColor = '#1f1b14'; // Dark charcoal ink
const gold = '#c89b3c';
const white = '#ffffff';
const lightText = '#d8d2c9';

// ----------------------------------------------------
// PAGE 1: COVER
// ----------------------------------------------------
// Background
doc.rect(0, 0, doc.page.width, doc.page.height).fill(bgColor);

// Gold border
doc.rect(20, 20, doc.page.width - 40, doc.page.height - 40).lineWidth(2).stroke(gold);

// Inner border
doc.rect(26, 26, doc.page.width - 52, doc.page.height - 52).lineWidth(0.5).stroke(gold);

// Logo/Title
doc.y = 250;
doc.fillColor(gold).fontSize(42).font('Times-Bold').text('SHATARA', { align: 'center', characterSpacing: 10 });
doc.moveDown(0.5);
doc.fillColor(white).fontSize(14).font('Helvetica-Oblique').text('Luxury Event Planners & Designers', { align: 'center', characterSpacing: 2 });

doc.moveDown(4);
doc.fillColor(lightText).fontSize(12).font('Helvetica').text('Bespoke Curation • Exquisite Locales • Culinary Excellence', { align: 'center', characterSpacing: 1 });

doc.y = doc.page.height - 100;
doc.fillColor(gold).fontSize(10).font('Helvetica').text('MUMBAI | UDAIPUR | GOA | JAIPUR | KERALA', { align: 'center', characterSpacing: 2 });

// Add a new page
doc.addPage();

// ----------------------------------------------------
// PAGE 2: SERVICES & PRICING
// ----------------------------------------------------
// Background
doc.rect(0, 0, doc.page.width, doc.page.height).fill(bgColor);
// Gold border
doc.rect(20, 20, doc.page.width - 40, doc.page.height - 40).lineWidth(1).stroke(gold);

doc.y = 80;
doc.fillColor(gold).fontSize(28).font('Times-Bold').text('SIGNATURE COLLECTIONS', { align: 'center', characterSpacing: 2 });
doc.moveDown(0.5);
doc.fillColor(lightText).fontSize(12).font('Helvetica-Oblique').text('Curated experiences tailored to your extraordinary vision.', { align: 'center' });

doc.moveDown(3);

const addService = (title, desc, price) => {
  doc.fillColor(white).fontSize(18).font('Times-Bold').text(title, { align: 'center' });
  doc.moveDown(0.5);
  doc.fillColor(lightText).fontSize(11).font('Helvetica').text(desc, { align: 'center', width: 400, x: (doc.page.width - 400) / 2 });
  doc.moveDown(0.5);
  doc.fillColor(gold).fontSize(12).font('Helvetica-Bold').text(`Starting from ${price}`, { align: 'center' });
  doc.moveDown(2);
};

addService(
  'The Intimate Celebration',
  'Perfect for boutique weddings and private gatherings. Includes essential curation, a standard team, and bespoke design consultation.',
  '₹2,50,000'
);

addService(
  'The Grand Symphony',
  'Our signature offering for lavish celebrations. Features premium venue scouting, a large coordination team, and artisanal floral masterpieces.',
  '₹7,50,000'
);

addService(
  'The Sovereign Experience',
  'Unparalleled luxury and exclusivity. Dedicated premium teams, bespoke culinary excellence, and complete destination management.',
  '₹15,00,000+'
);

doc.y = doc.page.height - 120;
doc.fillColor(lightText).fontSize(10).font('Helvetica').text('Prices are indicative and subject to exact requirements and scale.', { align: 'center' });
doc.moveDown(1);
doc.fillColor(gold).fontSize(12).font('Helvetica-Bold').text('Visit www.shatara-events.com to schedule your private consultation.', { align: 'center' });

// Finalize PDF file
doc.end();

console.log('Successfully generated ' + outPath);
