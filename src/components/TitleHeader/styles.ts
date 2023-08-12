import { styled } from '../../styles/stitches.config'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  svg: {
    width: '2rem',
    height: '2rem',
    color: '$green100',
  },

  span: {
    color: '$gray100',
    fontSize: '$2xl',
    fontWeight: '$bold',
    lineHeight: '$short',
  },
})
