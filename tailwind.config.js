module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,

    },
    extend: {
      fonFamily: {
        sanse: ['sans'],
     },
      colors:{
        'redutab':'#FF4342',
        'redprimary':'#FF0000',
        'pink':'#FF8080',
        'redmain':'#FF0000',
        'darkblue':'#030080',
        'graytext':'#000000',
        'primary':'#FAFAFA',
      },
      backgroundImage: {
        'hero': "url('../public/img/serviceinfo/card_bg.svg')",
        'ff': "url('../public/img/suggest_bg.svg')",
        'ddd': "url('../public/img/bg.svg')",
        'why': "url(../public/img/why_utab_back.svg)",
        'ph': "url(../public/img/phone_back.svg)",
     
      }

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
