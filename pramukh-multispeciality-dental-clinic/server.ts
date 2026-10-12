import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());

// API route for dental consultation enquiry
app.post('/api/enquiry', (req: Request, res: Response) => {
  const { fullName, mobileNumber, serviceInterest, preferredDate, preferredTime, clinicalNotes, consentCheck } = req.body;

  // Validation 1: Full name
  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    return res.status(400).json({
      success: false,
      error: 'FULL_NAME_REQUIRED',
      message: 'Please provide a valid full name (at least 2 characters).'
    });
  }

  // Validation 2: Mobile Number (Indian format check: 10 digits starting with 6,7,8,9)
  const cleanMobile = (mobileNumber || '').toString().replace(/\D/g, '');
  if (!cleanMobile || !/^[6-9]\d{9}$/.test(cleanMobile)) {
    return res.status(400).json({
      success: false,
      error: 'INVALID_MOBILE_NUMBER',
      message: 'Please provide a valid 10-digit Indian mobile number (e.g., 98989 09100).'
    });
  }

  // Validation 3: Service interest
  if (!serviceInterest || typeof serviceInterest !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'SERVICE_REQUIRED',
      message: 'Please select a dental service or reason for consultation.'
    });
  }

  // Validation 4: Privacy consent
  if (!consentCheck) {
    return res.status(400).json({
      success: false,
      error: 'CONSENT_REQUIRED',
      message: 'Privacy consent is required to allow clinic staff to contact you.'
    });
  }

  const enquiryId = 'PDK-' + Math.floor(100000 + Math.random() * 900000);

  // Return success JSON
  return res.status(200).json({
    success: true,
    enquiryId,
    message: 'Your consultation enquiry has been successfully logged with Pramukh Dental Clinic.',
    receivedAt: new Date().toISOString(),
    data: {
      fullName: fullName.trim(),
      mobileNumber: `+91 ${cleanMobile}`,
      serviceInterest,
      preferredDate: preferredDate || 'Flexible / Unspecified',
      preferredTime: preferredTime || 'Evening (05:00 PM – 08:30 PM)',
      notes: (clinicalNotes || '').trim()
    }
  });
});

async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });

    app.use(vite.middlewares);

    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Pramukh Dental Clinic server listening on http://0.0.0.0:${PORT}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server:', err);
});
