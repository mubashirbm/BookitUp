/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,html,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
}
