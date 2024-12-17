import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',            // Sıkıştırma algoritması (gzip kullanılıyor)
      ext: '.gz',                   // Sıkıştırılmış dosyalar için uzantı
      threshold: 10240,             // 10 KB üzerindeki dosyaları sıkıştır
      deleteOriginFile: false,      // Orijinal dosyalar korunur
      filter: /\.(js|css|html|json)$/, // Sadece belirli dosya türlerini sıkıştır
    }),
    compression({
      algorithm: 'brotliCompress',  // Brotli algoritmasıyla sıkıştırma (isteğe bağlı)
      ext: '.br',                   // Sıkıştırılmış dosyalar için uzantı
      threshold: 10240,             // 10 KB üzerindeki dosyaları sıkıştır
      deleteOriginFile: false,      // Orijinal dosyalar korunur
      filter: /\.(js|css|html|json)$/ // Sadece belirli dosya türlerini sıkıştır
    }),
  ],
  publicDir: 'public',              // Public dosya dizini
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:22', // Apache/PHP server port
        changeOrigin: true,
        secure: false,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
            console.log(proxyReq);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      }
    }
  }
});
