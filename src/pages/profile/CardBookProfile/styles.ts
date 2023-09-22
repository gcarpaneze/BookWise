import { styled } from '../../../styles/stitches.config'

export const CardContainer = styled('section', {})

export const CardHeader = styled('header', {
  display: 'flex',
  width: '100%',
  position: 'relative',
  marginBottom: '0.5rem',

  div: {
    border: '1px solid $gradient-vertical',
  },

  p: {
    color: '$gray400',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

export const CardContent = styled('article', {
  padding: '1.5rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  background: '$gray700',
  borderRadius: '0.5rem',

  '> div': {
    display: 'flex',
    position: 'relative',
    marginBottom: '1.5rem',
  },

  img: {
    borderRadius: 4,
    objectFit: 'cover',
    marginRight: '1.25rem',
  },

  h3: {
    color: '$gray100',
    fontSize: '$regular',
    fontWeight: '$bold',
    lineHeight: '$base',
  },

  h4: {
    color: '$gray400',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },

  span: {
    position: 'absolute',
    bottom: 0,
  },

  p: {
    color: '$gray300',
    fontSize: '$sm',
    fontWeight: '$bold',
    lineHeight: '$base',
  },
})
