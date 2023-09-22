import { styled } from '../../styles/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'

export const CardContentTrigger = styled(Dialog.Trigger, {
  border: 0,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: '1rem 1.25rem',
  width: '100%',
  background: '$gray700',
  borderRadius: '0.5rem',
  fontFamily: '$default',

  cursor: 'pointer',

  '&:hover': {
    background: 'rgba(131, 129, 217, 0.06)',
  },

  img: {
    borderRadius: 4,
    marginRight: '1.25rem',
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 94,
  },

  h3: {
    color: '$gray100',
    fontSize: '$regular',
    fontWeight: '$bold',
    lineHeight: '$short',
    textAlign: 'left',
  },

  h4: {
    color: '$gray400',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
    textAlign: 'left',
  },
})
