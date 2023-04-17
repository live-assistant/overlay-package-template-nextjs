/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      w1: '#FFFFFF',
      w2: '#F0F0F0',
      w3: '#E0E0E0',
      w4: '#D1D1D1',
      w5: '#C2C2C2',
      d0: '#000000',
      d1: '#1F1F1F',
      d2: '#2E2E2E',
      d3: '#3D3D3D',
      d4: '#474747',
      b1: '#3757FF',
      b2: '#4D68FF',
      b3: '#5C75FF',
      b4: '#6B82FF',
      b5: '#7A8FFF',
      cyan: '#46F2C0',
      lime: '#B7F277',
      orange: '#F2886B',
      purple: '#DC52F2',
      p0: '#F35F83',
      p1: '#F57191',
      p2: '#FA829F',
      p3: '#FF99B2',
      p4: '#FFB2C5',
    },
    extend: {
      fontFamily: {
        jingxihei: [
          'ar-udjingxiheigbstd',
        ],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      inset: {
        '1/6': '16.666667%',
      },
    },
  },
  plugins: [],
}
