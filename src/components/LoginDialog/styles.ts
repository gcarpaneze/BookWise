import { styled } from '../../styles/stitches.config'

import * as Dialog from '@radix-ui/react-dialog'

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  background: 'rgba(0, 0, 0, 0.60)',
  inset: 0,
})

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  inset: '50%',
  transform: 'translate(-50%, -50%)',
  width: '32.25rem',
  height: '21rem',
  background: '$gray700',
  borderRadius: '$sm',
})

export const HeaderDialog = styled('header', {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '1rem',

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

export const DialogDescription = styled(Dialog.Description, {
  margin: '1rem 4.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  h3: {
    color: '$gray200',
    fontSize: '$lg',
    fontWeight: '$bold',
    lineHeight: '$base',
    marginBottom: '1.5rem',
    fontFamily: '$default',
  },
})

export const Button = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  fontFamily: '$default',

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
