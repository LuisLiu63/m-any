/**
 * Author: luisliu
 * Description: theme vars in js
 * Time: 2022-03-19 11:46:48
 * Contact: lc63msn@Hotmail.com
 */
import { Levels, Status, Actions, Sizes } from '../factors';

const PubSizing = Sizes({
  bit: '0.1rem',
  mini: '0.2rem',
  small: '0.3rem',
  medium: '0.5rem',
  large: '0.8rem',
  huge: '1rem',
  super: '2rem',
})

export default {
  backgrounds: {
    ...Status({
      most: 'string',
      more: 'string',
      main: 'rgba(1, 0, 0, 1)',
      second: 'rgba(1, 0, 0, 0.8)',
      sub: 'rgba(1, 0, 0, 0.5)',
      last: 'string',
    }),
    gradients: Status({
      light: 'linear-gradient(0deg, rgba(32, 111, 223, 0.5) 0%, #206fdf 53%, rgba(32, 111, 223, 0.5) 100%)',
      deep: 'linear-gradient(0deg, rgba(32, 111, 223, 0.5) 0%, #206fdf 53%, rgba(32, 111, 223, 0.5) 100%)',
      most: 'string',
      more: 'string',
      main: 'string',
      second: 'string',
      sub: 'string',
      last: 'string',
    }),
    images: Status({
      most: 'string',
      more: 'string',
      main: 'string',
      second: 'string',
      sub: 'string',
      last: 'string',
    }),
    hover: Status({
      most: 'string',
      more: 'string',
      main: 'rgba(255, 255, 255, 1)',
      second: 'string',
      sub: 'string',
      last: 'string'
    }),
    focus: Status({
      most: 'string',
      more: 'string',
      main: 'rgba(255, 255, 255, 1)',
      second: 'string',
      sub: 'string',
      last: 'string',
    }),
    active: Status({
      most: 'string',
      more: 'string',
      main: 'rgba(255, 255, 255, 1)',
      second: 'string',
      sub: 'string',
      last: 'string',
    }),
  },
  colors: {
    ...Status({
      most: 'string',
      more: 'string',
      main: 'rgba(255, 255, 255, 1)',
      second: 'rgba(255, 255, 255, 0.8)',
      sub: 'rgba(255, 255, 255, 0.5)',
      last: 'string',
    }),
    hover: Status({
      most: 'string',
      more: 'string',
      main: 'rgba(0, 0, 0, 1)',
      second: 'rgba(0, 0, 0, 0.8)',
      sub: 'rgba(0, 0, 0, 0.6)',
      last: 'string',
    }),
    focus: Status({
      most: 'string',
      more: 'string',
      main: 'string',
      second: 'string',
      sub: 'string',
      last: 'string',
    }),
    active: Status({
      most: 'string',
      more: 'string',
      main: 'rgba(0, 0, 0, 1)',
      second: 'string',
      sub: 'string',
      last: 'string',
    })
  },
  border: {
    ...Status({
      most: 'string',
      more: 'string',
      main: 'string',
      second: 'string',
      sub: 'string',
      last: 'string',
    })
  },
  shadow: {
    ...Status({
      most: 'string',
      more: 'string',
      main: 'string',
      second: 'string',
      sub: 'string',
      last: 'string',
    }),
  },
  sizes: {
    ...Sizes({
      bit: '0.1rem',
      mini: '0.2rem',
      small: '0.5rem',
      medium: '1rem',
      large: '1.5rem',
      huge: '2rem',
      super: '2.5rem',
    }),
    text: ({
      bit: '1.2rem',
      mini: '1.4rem',
      small: '1.6rem',
      medium: '1.8rem',
      large: '2rem',
      huge: '2.4rem',
      super: '2.8rem',
    }),
    radius: Sizes({
      bit: '0.5rem',
      mini: '0.8rem',
      small: '1rem',
      medium: '1.5rem',
      large: '2rem',
      huge: '50%',
      super: '100%',
    }),
    padding: Sizes({
      bit: '0.1rem 0.1rem',
      mini: '0.1rem 0.2rem',
      small: '0.2rem 0.3rem',
      medium: '0.3rem 0.5rem',
      large: '0.4rem 0.8rem',
      huge: '0.6rem 1rem',
      super: '1rem 2rem',
    }),
    padLeft: PubSizing,
    padRight: PubSizing,
    padTop: PubSizing,
    padBottom: PubSizing,
    padX: PubSizing,
    padY: PubSizing,
    margin: Sizes({
      bit: '0.1rem 0.1rem',
      mini: '0.1rem 0.2rem',
      small: '0.2rem 0.3rem',
      medium: '0.3rem 0.5rem',
      large: '0.4rem 0.8rem',
      huge: '0.6rem 1rem',
      super: '1rem 2rem',
    }),
    marLeft: PubSizing,
    marRight: PubSizing,
    marTop: PubSizing,
    marBottom: PubSizing,
    marX: PubSizing,
    marY: PubSizing,
  }
}
