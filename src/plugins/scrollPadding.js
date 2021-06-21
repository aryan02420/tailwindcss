import createUtilityPlugin from '../util/createUtilityPlugin'

export default function () {
  return createUtilityPlugin('scrollPadding', [
    ['scroll-m', ['scroll-padding']],
    [
      ['scroll-mx', ['scroll-padding-left', 'scroll-padding-right']],
      ['scroll-my', ['scroll-padding-top', 'scroll-padding-bottom']],
    ],
    [
      ['scroll-mt', ['padding-top']],
      ['scroll-mr', ['padding-right']],
      ['scroll-mb', ['padding-bottom']],
      ['scroll-ml', ['padding-left']],
    ],
  ])
}
