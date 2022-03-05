/**
 * @author liuchuan
 */

import { App } from 'vue';

import UI from './ui';
import { SetTheme } from './theme';

import { OptionsParam } from './types';

export default {
  SetTheme,
  UseUI(Vue: App, options: OptionsParam) {
    Vue.use(UI, options);
  },
}
