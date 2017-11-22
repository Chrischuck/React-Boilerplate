import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  fadeIn: {
    animationDuration: '1.5s',    
    animationName: {
      from: {
        opacity: .1
      },
      to: {
        opacity: 1
      }
    }
  },

  fadeInRight: {
    animationDuration: '1s',    
    animationName: {
      from: {
        opacity: .1,
        transform: 'translate3d(100%, 0, 0)'
      },
      to: {
        opacity: 1,
        transform: 'none'
      }
    }
  }

})

export const fadeIn = css(styles.fadeIn)
export const fadeInRight = css(styles.fadeInRight)

