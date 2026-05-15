/** PM2: запуск из /var/www/sevcrf; Next.js сам читает .env в этой папке. */
module.exports = {
  apps: [
    {
      name: "sevcrf",
      cwd: "/var/www/sevcrf",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      env: {
        NODE_ENV: "production",
      },
      max_memory_restart: "512M",
    },
  ],
};
