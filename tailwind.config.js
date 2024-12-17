/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelPink: "#FAD0C4",
        pastelBlue: "#A2DFF7",
        pastelYellow: "#FFF5B7",
        pastelLavender: "#E4D1F9",
        pastelGreen: "#B2E3B2",
        background: "#EEF0F2",
        pastelCoral: "#FFB3B3",
        pastelPeach: "#FFD8B1",
        pastelMint: "#B3E0B3",
        pastelSkyBlue: "#A8D0E6",
        pastelLavenderPink: "#E6A8D7",
        pastelLilac: "#D3A6FF",
        pastelCream: "#F5E1A4",
        pastelAqua: "#A3D8D3",
        pastelLemon: "#FFEB99",
        pastelRose: "#F1D1D1",
        pastelIndigo: "#B2A9FF", // Added
        pastelSage: "#B7C8A6", // Added
        pastelPeachyPink: "#FAD7D7", // Added
        pastelMintGreen: "#A9E4D5", // Added
        pastelBlueGray: "#A9B4C2", // Added
        pastelRosePink: "#F5B7B1", // Added
        pastelButterYellow: "#FFEC8B", // Added
        pastelLavenderGray: "#C4B4E3", // Added
        pastelIceBlue: "#C0E7F7", // Added
        pastelSalmon: "#FFB8B8", // Added
        lightText: "#999BA9",
      },
    },
  },
  // plugins: [require("tailwindcss"), require("autoprefixer")],
};
