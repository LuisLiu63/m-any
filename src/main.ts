/**
 * @author liuchuan
 */
import { App } from 'vue';

import { FullOptions } from './types/index';
import { UI_PREFIX, defaultOptions, SetOptions } from './options';

import './styles/index.scss';

export default {
  install(Vue: App, options: FullOptions): void {
    console.log({ Vue, options });
  }
}
