export default function () {
  return function ({ addUtilities, variants }) {
    addUtilities(
      {
        '.scroll-snap-align-none': { 'scroll-snap-align': 'none' },
        '.scroll-snap-align-start': { 'scroll-snap-align': 'start' },
        '.scroll-snap-align-end': { 'scroll-snap-align': 'end' },
        '.scroll-snap-align-center': { 'scroll-snap-align': 'center' },
        '.scroll-snap-align-none-start': { 'scroll-snap-align': 'none start' },
        '.scroll-snap-align-none-end': { 'scroll-snap-align': 'none end' },
        '.scroll-snap-align-none-center': { 'scroll-snap-align': 'none center' },
        '.scroll-snap-align-start-none': { 'scroll-snap-align': 'start none' },
        '.scroll-snap-align-start-end': { 'scroll-snap-align': 'start end' },
        '.scroll-snap-align-start-center': { 'scroll-snap-align': 'start center' },
        '.scroll-snap-align-end-none': { 'scroll-snap-align': 'end none' },
        '.scroll-snap-align-end-start': { 'scroll-snap-align': 'end start' },
        '.scroll-snap-align-end-center': { 'scroll-snap-align': 'end center' },
        '.scroll-snap-align-center-none': { 'scroll-snap-align': 'center none' },
        '.scroll-snap-align-center-start': { 'scroll-snap-align': 'center start' },
        '.scroll-snap-align-center-end': { 'scroll-snap-align': 'center end' },
      },
      variants('scrollSnapAlign')
    )
  }
}
