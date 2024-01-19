/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: "/api/form",
            headers: [
              { key: "Access-Control-Allow-Origin", value: "*" },
              { key: "Access-Control-Allow-Methods", value: "POST" },
              { key: "Access-Control-Allow-Headers", value: "Content-Type" },
            ],
          },
        ];
      },
}

module.exports = nextConfig
