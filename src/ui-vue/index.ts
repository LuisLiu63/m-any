/**
 * @author liuchuan
 */
import { App } from 'vue';
import { OptionsParam } from '../types/index';
import { UI_PREFIX, DefaultOptions, SetOptions } from '../options';

export * as Button from './button/index.vue';

export default {
  install(Vue: App, options: OptionsParam): void {
    console.log({ Vue, options });
  }
}
