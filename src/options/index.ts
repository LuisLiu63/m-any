import { FullOptions, OptionsParam } from '../types/index';

export const UI_PREFIX = 'Any-';

export const DefaultOptions: FullOptions = {
  theme: 'base',
  size: 'medium',
  ui: {
    buttonType: 'main',
    buttonSize: 'medium',
  }
}

export let ResultOptions: FullOptions = {
  theme: 'base',
  size: 'medium',
  ui: {
    buttonType: 'main',
    buttonSize: 'medium',
  }
}

export function SetOptions(options: OptionsParam): void {
  ResultOptions = Object.assign({}, DefaultOptions, options);
}
