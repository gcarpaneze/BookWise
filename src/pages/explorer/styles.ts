import { styled } from '../../styles/stitches.config'

export const HomeContainer = styled('main', {
  paddingLeft: '$5',
  paddingTop: '$5',
  display: 'flex',
  alignItems: 'flex-start',

  '> div > header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export const InputFind = styled('form', {
  position: 'relative',
  display: 'flex',
  gap: '0.5rem',
  width: '27.0625rem',
  height: '3rem',
  alignItems: 'center',

  input: {
    width: '100%',
    height: '100%',
    padding: '0.875rem 1.25rem',
    background: '$gray800',
    borderRadius: '0.25rem',
    border: '1px solid $gray500',

    color: '$gray200',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',

    '&:placeholder': {
      color: '$gray400',
    },

    '&:focus': {
      border: '1px solid $green200',
    },
  },

  button: {
    all: 'unset',
    position: 'absolute',
    right: '1.25rem',
    color: '$gray500',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    cursor: 'pointer',
  },
})

export const FiltersTagsContainer = styled('div', {
  maxWidth: '1120px',
  marginTop: '2.5rem',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem',
})

export const FilterTagButton = styled('button', {
  all: 'unset',
  border: '1px solid $purple100',
  color: '$purple100',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1rem',
  lineHeight: '$base',
  borderRadius: '$full',
  padding: '0.25rem 1rem',

  cursor: 'pointer',

  '&:hover': {
    background: '$purple200',
    border: '1px solid $purple100',
    color: '$gray100',
  },

  variants: {
    selected: {
      true: {
        background: '$purple200',
        color: '$gray100',
      },
    },
  },
})

export const HomeContent = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.25rem',
  marginTop: '3rem',
  maxWidth: '1120px',
})
