import { FullOptions } from '../types/index';

export const UI_PREFIX = 'Big-';

export const defaultOptions: FullOptions = {
  theme: 'base',
  size: 'normal'
}

export function SetOptions(options: FullOptions): void {
  Object.assign(defaultOptions, options);
}
