/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        red: {
          600: '#E11138'
        }
      },
      maxWidth: {
        xxs: '13rem'
      },
      minWidth: {
        xxxs: '10rem',
        '1/2': '49%'
      },
      width: {
        'max-container': '70rem'
      }
    }
  }
}
