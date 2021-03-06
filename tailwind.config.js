module.exports = {
  purge: {
    enabled: true,
    content: ['index.html'],
    safelist: ['h-screen'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'Roboto', 'sans-serif'],
      'display': ['Heebo', 'Georgia', 'serif'],
    },

    colors: {
      transparent: 'transparent',
      white: '#fff',
      gray: {
        1: 'var(--gray1)',
        2: 'var(--gray2)',
        3: 'var(--gray3)',
        4: 'var(--gray4)',
        5: 'var(--gray5)',
        6: 'var(--gray6)',
      },

      blue: 'var(--blue)',
      darkblue: 'var(--darkblue)',
      red: 'var(--red)',
      green: 'var(--green)',
    },

    borderRadius: {
      md: '.625rem',
      lg: '.75rem',
      xl: '1.125rem',
      '2xl': '1.5rem',
      full: '9999px',
    },

    boxShadow: {
      DEFAULT: '0px 10px 30px rgba(51, 51, 51, 0.1)',
    },

    extend: {
      fontSize: {
        xxs: '.625rem'
      },

      width: {
        '9/10': '90%',
        '85': '21.25rem',
        '15ch': '15ch',
        '20ch': '20ch',
        'fit': 'fit-content',
      },

      maxWidth: {
        '85': '21.25rem',
        '15ch': '15ch',
        '20ch': '20ch',
        '90': '22.5rem',
      },

      margin: {
        '1/5': '20%',
        '1/6': 'calc(100%/6)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
