/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        maxWidth: {
            container: "1440px",
            contentContainer: "1140px",
            containerSmall: "1024px",
            containerxs: "768px",
        },
        extend: {
            screens: {
                xs: "475px",
                sm: "640px",
                md: "667px",
                mdl: "768px",
                lgl: "1024px",
                xl: "1280px",
            },
            fontFamily: {
                unbounded: ["Unbounded", "cursive"],
                montserrat: ["Montserrat", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            boxShadow: {
                navbarShadow: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
            },
            colors: {
                bodyColor: "#0A192F",
                textGreen: "#64FFDA",
                textDark: "#8892B0",
                textLight: "CCD6F6",
                hoverColor: "rgba(100,255,218,0.1)",
            },
        },
        plugins: [],
    },
};


// xs: "320px",
// sm: "375px",
// sml: "500px",
// md: "667px",
// mdl: "768px",
// lg: "960px",
// lgl: "1024px",
// xl: "1280px",