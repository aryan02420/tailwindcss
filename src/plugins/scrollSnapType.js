export default function () {
  return function ({ addUtilities, variants }) {
    addUtilities(
      {
        '.scroll-snap-type-none': { 'scroll-snap-type': 'none' },
        '.scroll-snap-type-x': { 'scroll-snap-type': 'x' },
        '.scroll-snap-type-y': { 'scroll-snap-type': 'y' },
        '.scroll-snap-type-block': { 'scroll-snap-type': 'block' },
        '.scroll-snap-type-inline': { 'scroll-snap-type': 'inline' },
        '.scroll-snap-type-both': { 'scroll-snap-type': 'both' },
        '.scroll-snap-type-x-mandatory': { 'scroll-snap-type': 'x mandatory' },
        '.scroll-snap-type-y-mandatory': { 'scroll-snap-type': 'y mandatory' },
        '.scroll-snap-type-block-mandatory': { 'scroll-snap-type': 'block mandatory' },
        '.scroll-snap-type-inline-mandatory': { 'scroll-snap-type': 'inline mandatory' },
        '.scroll-snap-type-both-mandatory': { 'scroll-snap-type': 'both mandatory' },
        '.scroll-snap-type-x-proximity': { 'scroll-snap-type': 'x proximity' },
        '.scroll-snap-type-y-proximity': { 'scroll-snap-type': 'y proximity' },
        '.scroll-snap-type-block-proximity': { 'scroll-snap-type': 'block proximity' },
        '.scroll-snap-type-inline-proximity': { 'scroll-snap-type': 'inline proximity' },
        '.scroll-snap-type-both-proximity': { 'scroll-snap-type': 'both proximity' },
      },
      variants('scrollSnapType')
    )
  }
}
