import { styled } from '../../styles/stitches.config'

export const ProfileContainer = styled('main', {
  paddingLeft: '$5',
  paddingTop: '$5',
  display: 'flex',
  alignItems: 'flex-start',
})

export const ProfileContent = styled('section', {
  display: 'grid',
  gridTemplateColumns: '38rem 20.25rem',
  gap: '4rem',
})

export const SectionBookReviews = styled('article', {
  marginTop: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  '> h3': {
    color: '$gray100',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
    marginBottom: '1rem',
  },
})

export const SectionUserInfos = styled('article', {
  marginTop: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  img: {
    borderRadius: '$full',
    marginBottom: '1.5rem',
    marginTop: 0,
    marginRight: '$4',
    border: 'solid 1px $gradient-vertical',
    objectFit: 'cover',
  },

  h3: {
    color: '$gray100',
    fontSize: '$xl',
    fontWeight: '$bold',
    lineHeight: '$base',
  },

  h4: {
    color: '$gray400',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$tall',
    marginBottom: '2rem',
  },

  '>span': {
    borderRadius: '$full',
    backgroundColor: '$green200',
    width: '2rem',
    height: '0.25rem',
    marginBottom: '2rem',
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
})

export const ItemUserInfo = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',

  svg: {
    width: '2rem',
    height: '2rem',
    color: '$green100',
  },

  strong: {
    color: '$gray200',
    fontSize: '$md',
    fontWeight: 'bold',
    lineHeight: '$base',
  },

  p: {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})
