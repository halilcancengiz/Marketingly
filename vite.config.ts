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
});
