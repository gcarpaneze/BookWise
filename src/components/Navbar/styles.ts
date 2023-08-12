import { styled } from '../../styles/stitches.config'

export const SidebarContainer = styled('nav', {
  height: '61.75rem',
  width: '14.5rem',
  background: '$gray700',
  borderRadius: 12,
  marginRight: '6rem',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  img: {
    margin: '3.25rem auto 4rem',
  },
})

export const Menu = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const ButtonOptionMenu = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  cursor: 'pointer',
  marginBottom: '$4',

  svg: {
    width: '1.5rem',
    height: '1.5rem',
    color: '$gray400',
  },

  span: {
    color: '$gray400',
    fontSize: '$md',
    lineHeight: '$base',
  },

  '&:hover': {
    svg: {
      color: '$gray100',
    },

    span: {
      color: '$gray100',
    },
  },
})

export const ButtonLogin = styled('button', {
  all: 'unset',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.75rem',

  cursor: 'pointer',

  position: 'absolute',
  bottom: '1.5rem',

  span: {
    fontWeight: '$bold',
    fontSize: '$md',
    color: '$gray200',
    lineHeight: '$base',
  },

  svg: {
    color: '$green100',
    width: '1.25rem',
    height: '1.25rem',
  },
})
