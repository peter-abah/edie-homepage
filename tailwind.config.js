module.exports = {
  purge: {
    enabled: true,
    contents: ['/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'Roboto', 'sans-serif'],
      'display': ['Heebo', 'Georgia', 'serif'],
    },

    colors: {
      white: 'fff',
      gray: {
        1: 'var(--gray1)',
        2: 'var(--gray2)',
        3: 'var(--gray3)',
        4: 'var(--gray4)',
        5: 'var(--gray5)',
        6: 'var(--gray6',
      },

      blue: 'var(--blue)',
      darkblue: 'var(--dark-blue)',
      red: 'var(--red)',
      green: 'var(--green)',
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
