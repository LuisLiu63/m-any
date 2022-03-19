/**
 * Author: luisliu
 * Description: theme vars in js
 * Time: 2022-03-19 11:46:48
 * Contact: lc63msn@Hotmail.com
 */
import { Levels, Status, Actions, Sizes } from '../factors';

export default {
  backgrounds: {
    ...Status({}),
    gradients: {
      // 角度_颜色数_名称
      deg0_3_1: 'linear-gradient(0deg, rgba(32, 111, 223, 0.5) 0%, #206fdf 53%, rgba(32, 111, 223, 0.5) 100%)',
      deg0_3_2: 'linear-gradient(0deg, rgba(32, 111, 223, 0.5) 0%, #206fdf 53%, rgba(32, 111, 223, 0.5) 100%)',
    },
    images: {
      normal: ''
    },
  },
  colors: {
    ...Status({}),
    text: {
      ...Status({}),
      ...Actions({
        force: '#db2f2f',
        strong: '#db2f2f',
        care: '#f3d23a',
        relax: '#ffffff',

      }),
      default: '#9cc5ff',
      hover: '#ffffff',
      success: '#54e888',
      error: '#db2f2f',
      warning: '#f3d23a',
      helper: '#395786',
      disable: '#3b4859',
    },
    border: {
      default: 'rgba(32, 111, 223, 0.5)'
    }
  },
  sizes: {
    ...Sizes(),
    padding: {
      bit: '0.1rem 0.2rem',
      mini: '0.1rem 0.2rem',
      small: '0.2rem 0.4rem',
      medium: '0.3rem 0.6rem',
      large: '0.4rem 0.8rem',
      huge: '0.6rem 1rem',
      super: '0.8rem 1.2rem',
    }
  }
}
