// @flow
import { StyleSheet } from 'aphrodite/no-important'

const rotate = {
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
}

export default StyleSheet.create({
  ring: {
    display: 'inline-block',
    position: 'relative',
    width: 24,
    height: 24,
  },

  ring__inner: {
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    width: 18,
    height: 18,
    margin: 2,
    border: '2px solid #fff',
    borderRadius: '50%',
    animationName: [rotate],
    animationDuration: '1.2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'cubic-bezier(0.5, 0, 0.5, 1)',
    borderColor: '#fff transparent transparent transparent',

    ':nth-child(1)': {
      animationDelay: '-0.45s',
    },

    ':nth-child(2)': {
      animationDelay: '-0.3s',
    },

    ':nth-child(3)': {
      animationDelay: '-0.15s',
    },
  },
})
