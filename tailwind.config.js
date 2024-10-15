module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    darkMode: 'class', // enable dark mode
    theme: {
      extend: {
        colors: {
          // Defining custom CSS variables for light and dark mode themes
          primary: {
            light: 'var(--color-primary-light)',
            dark: 'var(--color-primary-dark)',
          },
          background: {
            light: 'var(--color-background-light)',
            dark: 'var(--color-background-dark)',
          },
          text: {
            light: 'var(--color-text-light)',
            dark: 'var(--color-text-dark)',
          },
          accent: {
            light: 'var(--color-accent-light)',
            dark: 'var(--color-accent-dark)',
          },
        },
      },
    },
    plugins: [],
  };
  