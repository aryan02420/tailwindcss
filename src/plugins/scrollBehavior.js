export default function () {
  return function ({ addUtilities, variants }) {
    addUtilities(
      {
        '.scroll-auto': { 'scroll-behavior': 'auto' },
        '.scroll-smooth': { 'scroll-behavior': 'smooth' },
      },
      variants('scrollBehavior')
    )
  }
}
