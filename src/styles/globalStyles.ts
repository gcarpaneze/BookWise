import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    fontFamily: 'Nunito',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray800',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontWeight: 400,

    ':focus': {
      outline: 'none',
    },
  },
})
