import { styled } from '../../styles/stitches.config'

export const FormContainer = styled('form', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
  background: '$gray700',
  borderRadius: '0.5rem',
  padding: '1.5rem',

  textarea: {
    resize: 'none',
    width: '100%',
    height: '10.25rem',
    padding: '0.875rem 1.25rem',
    borderRadius: '$sm',
    border: '1px solid $gray500',
    backgroundColor: '$gray800',
    marginBottom: '0.75rem',

    color: '$gray200',
    fontSize: '$sm',
    fontFamily: '$default',
    lineHeight: '$base',
    fontWeight: '$regular',

    '&:placeholder': {
      color: '$gray400',
    },

    '&:focus': {
      border: '1px solid $green200',
    },
  },

  div: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'flex-end',
    width: '100%',
  },
})

export const FormHeader = styled('header', {
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

export const Button = styled('button', {
  all: 'unset',
  display: 'flex',
  padding: '0.5rem',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '$sm',
  backgroundColor: '$gray600',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray500',
  },

  variants: {
    fontColor: {
      cancel: {
        color: '$purple100',
      },
      submit: {
        color: '$green100',
      },
    },
  },

  svg: {
    width: '1.5rem',
    height: '1.5rem',
  },
})
