import { styled } from '../../styles/stitches.config'

export const RegisterContainer = styled('main', {
  padding: '$5',
  display: 'grid',
  gridTemplateColumns: '37rem 1fr',

  '> img': {
    height: '100vh',
    objectFit: 'cover',
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  h1: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    lineHeight: '$short',
  },

  h3: {
    color: '$gray200',
    fontSize: '$md',
    fontWeight: '$500',
    lineHeight: '$base',
    marginBottom: '$10',
  },
})

export const Button = styled('button', {
  all: 'unset',
  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '23.25rem',
  padding: '$5 $6',
  gap: '$5',
  background: '$gray600',
  borderRadius: '0.5rem',
  marginBottom: '$5',

  span: {
    color: '$gray200',
    fontSize: '1.125rem',
    fontWeight: '$bold',
    lineHeight: '$base',
  },
})
