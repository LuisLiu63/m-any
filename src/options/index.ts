import { FullOptions, OptionsParam } from '../types/index';

export const UI_PREFIX = 'Any-';

export const DefaultOptions: FullOptions = {
  theme: 'base',
  size: 'normal',
  ui: {
    buttonType: 'main',
    buttonSize: 'normal',
  }
}

export let ResultOptions: FullOptions = {
  theme: 'base',
  size: 'normal',
  ui: {
    buttonType: 'main',
    buttonSize: 'normal',
  }
}

export function SetOptions(options: OptionsParam): void {
  ResultOptions = Object.assign({}, DefaultOptions, options);
}
