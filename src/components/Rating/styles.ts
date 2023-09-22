import { styled } from '../../styles/stitches.config'

export const RatingContainer = styled('span', {
  display: 'flex',
  gap: '0.25rem',
})

export const ButtonStar = styled('button', {
  all: 'unset',

  variants: {
    editable: {
      true: {
        cursor: 'pointer',
      },
    },
  },

  svg: {
    color: '$purple100',
    width: '1rem',
    height: '1rem',
  },
})
