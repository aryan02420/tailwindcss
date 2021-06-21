import createUtilityPlugin from '../util/createUtilityPlugin'

export default function () {
  return createUtilityPlugin('scrollMargin', [
    ['scroll-m', ['scroll-margin']],
    [
      ['scroll-mx', ['scroll-margin-left', 'scroll-margin-right']],
      ['scroll-my', ['scroll-margin-top', 'scroll-margin-bottom']],
    ],
    [
      ['scroll-mt', ['margin-top']],
      ['scroll-mr', ['margin-right']],
      ['scroll-mb', ['margin-bottom']],
      ['scroll-ml', ['margin-left']],
    ],
  ])
}
