import { styled } from '../../styles/stitches.config'

export const CardContainer = styled('section', {
  padding: '1.5rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
  background: '$gray700',
  borderRadius: '0.5rem',
})

export const CardHeader = styled('header', {
  display: 'flex',
  width: '100%',
  position: 'relative',

  div: {
    border: '1px solid $gradient-vertical',
  },

  img: {
    borderRadius: '$full',
    marginRight: '$4',
    border: 'solid 1px $gradient-vertical',
  },

  h3: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: '$regular',
    lineHeight: '$base',
  },

  p: {
    color: '$gray400',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },

  span: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
})

export const CardContent = styled('article', {
  display: 'flex',

  img: {
    width: '6.75rem',
    height: '9.5rem',
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
    marginBottom: '0.75rem',
  },

  p: {
    color: '$gray300',
    fontSize: '$sm',
    fontWeight: '$bold',
    lineHeight: '$base',
  },
})
