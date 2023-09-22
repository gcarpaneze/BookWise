import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '../../../styles/stitches.config'

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  background: 'rgba(0, 0, 0, 0.60)',
  inset: 0,
})

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '41.25rem',
  background: '$gray800',
  height: '100vh',
  padding: '1.5rem 3rem',
  overflowY: 'auto',

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '$default',

    '> header': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem',
      marginTop: '2.5rem',

      '> span': {
        color: 'gray200',
        fontSize: '$sm',
        lineHeight: '$base',
      },

      '> button': {
        all: 'unset',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.25rem 0.5rem',
        color: '$purple100',
        fontSize: '$md',
        fontWeight: '$bold',
        lineHeight: '$base',
        cursor: 'pointer',

        '&:hover': {
          background: 'rgba(131, 129, 217, 0.06)',
          borderRadius: '0.25rem',
        },
      },
    },
  },
})

export const HeaderDialog = styled('header', {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '1rem',

  button: {
    all: 'unset',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1.5rem',
    height: '1.5rem',

    cursor: 'pointer',

    color: '$gray400',
  },
})

export const BookInformation = styled('article', {
  display: 'flex',
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  background: '$gray700',
  padding: '1.5rem 2rem',

  img: {
    borderRadius: '0.625rem',
    marginRight: '2rem',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  h3: {
    color: '$gray100',
    fontSize: '$lg',
    fontWeight: '$bold',
    lineHeight: '$base',
    marginBottom: '0.5rem',
  },

  h4: {
    color: '$gray300',
    fontSize: '$md',
    lineHeight: '$base',
  },

  span: {
    marginTop: '0.25rem',
    color: '$gray400',
    lineHeight: '$base',
  },
})

export const BookMoreInformation = styled('article', {
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  background: '$gray700',
  borderTop: 'solid 1px $gray600',
  display: 'flex',
  gap: '3.75rem',

  padding: '1.5rem 2rem',

  '> div': {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',

    div: {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  svg: {
    width: '1.5rem',
    height: '1.5rem',
    color: '$green200',
    fontWeight: '$bold',
  },

  span: {
    color: '$gray200',
    fontSize: '$sm',
    lineHeight: '$base',
  },

  strong: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: '$bold',
    lineHeight: '$short',
    marginBottom: '0.5rem',
  },
})

export const Reviews = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  marginBottom: '0.75rem',
})
