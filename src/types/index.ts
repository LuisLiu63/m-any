import { functionType as ButtonType, buttonSize } from './ui';

export type ThemeNames = 'base';

export interface FullOptions {
  theme: ThemeNames,
  size: string,
  ui: {
    buttonType: ButtonType,
    buttonSize: buttonSize,
  }
}

export interface OptionsParam {
  theme?: string,
  size?: string
}

export * from './ui'
