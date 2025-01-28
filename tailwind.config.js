// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust the paths as needed for your project structure
    "./public/index.html", // Add any other relevant paths
  ],
  theme: {
    extend: {
      colors: {
        l_blue: '#B9FFFF',
        harvestgold: '#FDB515',
        black_g: '#0B0B0B',
      },
      boxShadow: {
        glow: "0 0 10px #0EA5E9, 0 0 20px #0EA5E9",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
