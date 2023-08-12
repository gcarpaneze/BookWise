import { styled } from '../../styles/stitches.config'

export const HomeContainer = styled('main', {
  paddingLeft: '$5',
  paddingTop: '$5',
  display: 'flex',
  alignItems: 'flex-start',
})

export const HomeContent = styled('section', {
  display: 'grid',
  gridTemplateColumns: '38rem 20.25rem',
  gap: '4rem',
})

export const SectionBooks = styled('article', {
  marginTop: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  '> h3': {
    color: '$gray100',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
    marginBottom: '1rem',
  },
})

export const SectionPopularBooks = styled('article', {
  marginTop: '2.5rem',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',

    '> button': {
      all: 'unset',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.25rem 0.5rem',
      color: '$purple100',
      fontSize: '$sm',
      fontWeight: '$bold',
      lineHeight: '$base',
      cursor: 'pointer',

      '&:hover': {
        background: 'rgba(131, 129, 217, 0.06)',
        borderRadius: '0.25rem',
      },
    },
  },

  h3: {
    color: '$gray100',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
})
