module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mountain': "url('img/mountain.jpg')",
        'teal-mountain': "url('img/teal_mountain.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
