/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blue: '#0029FF',
        blueSecondary: '#6981FC',
        lightBlue: '#D8ECFF',
        gray: '#5D5D5F',
        lightGray: '#F8F8F8',
      },
      fontFamily: {
        header: ['Kanit', 'Helvetica', 'Arial'],
        header2: ['Poppins', 'Helvetica', 'Arial'],
        p: ['Mulish', 'Helvetica', 'Arial'],
      },
    },
  },
  plugins: [],
};
