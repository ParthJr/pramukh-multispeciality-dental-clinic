import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

function enquiryApiPlugin(): Plugin {
  return {
    name: 'enquiry-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/enquiry', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);

              if (!data.fullName || typeof data.fullName !== 'string' || data.fullName.trim().length < 2) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                return res.end(
                  JSON.stringify({
                    success: false,
                    error: 'FULL_NAME_REQUIRED',
                    message: 'Please provide a valid full name (at least 2 characters).'
                  })
                );
              }

              const cleanMobile = (data.mobileNumber || '').toString().replace(/\D/g, '');
              if (!cleanMobile || !/^[6-9]\d{9}$/.test(cleanMobile)) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                return res.end(
                  JSON.stringify({
                    success: false,
                    error: 'INVALID_MOBILE_NUMBER',
                    message: 'Please provide a valid 10-digit Indian mobile number (e.g., 98989 09100).'
                  })
                );
              }

              if (!data.consentCheck) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                return res.end(
                  JSON.stringify({
                    success: false,
                    error: 'CONSENT_REQUIRED',
                    message: 'Privacy consent is required to allow clinic staff to contact you.'
                  })
                );
              }

              const enquiryId = 'PDK-' + Math.floor(100000 + Math.random() * 900000);

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              return res.end(
                JSON.stringify({
                  success: true,
                  enquiryId,
                  message: 'Your consultation enquiry has been successfully logged with Pramukh Dental Clinic.',
                  receivedAt: new Date().toISOString(),
                  data: {
                    fullName: data.fullName.trim(),
                    mobileNumber: `+91 ${cleanMobile}`,
                    serviceInterest: data.serviceInterest || 'General Consultation',
                    preferredDate: data.preferredDate || 'Flexible / Unspecified',
                    preferredTime: data.preferredTime || 'Evening (05:00 PM – 08:30 PM)'
                  }
                })
              );
            } catch (err) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              return res.end(
                JSON.stringify({
                  success: false,
                  message: 'Invalid request payload.'
                })
              );
            }
          });
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), enquiryApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
