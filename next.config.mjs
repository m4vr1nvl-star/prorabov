/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Настройки для работы на продакшн домене prorabov.ru
  trailingSlash: false,
  
  // Разрешаем работу на разных доменах
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ];
  },
  
  // Оптимизация для продакшн
  // compress отключен - Vercel использует HTTP/2 со встроенным сжатием
  compress: false,
  poweredByHeader: false,
};

export default nextConfig;
