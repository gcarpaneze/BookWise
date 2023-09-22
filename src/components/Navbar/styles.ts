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
  color: '$gray400',

  variants: {
    selectedItem: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',
      },
    },
  },

  svg: {
    width: '1.5rem',
    height: '1.5rem',
    color: '$gray400',
  },

  span: {
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

export const MarkItem = styled('span', {
  borderRadius: '$full',
  width: 4,
  height: '100%',

  variants: {
    selectedItem: {
      true: {
        color: '$green200',
        backgroundColor: '$green200',
      },
    },
  },
})

export const AreaUserAcess = styled('div', {
  position: 'absolute',
  bottom: '1.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '2.94rem',
  marginRight: '2.94rem',
  gap: '0.75rem',

  img: {
    borderRadius: '$full',
    marginBottom: 0,
    marginTop: 0,
    marginRight: '$4',
    border: 'solid 1px $gradient-vertical',
    objectFit: 'cover',
  },

  h3: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

export const ButtonLogin = styled('button', {
  all: 'unset',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.75rem',

  cursor: 'pointer',

  span: {
    fontWeight: '$bold',
    fontSize: '$md',
    color: '$gray200',
    lineHeight: '$base',
  },

  svg: {
    width: '1.25rem',
    height: '1.25rem',
  },
})
