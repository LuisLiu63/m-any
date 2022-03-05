import { functionType as ButtonType, buttonSize } from './ui';

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

export type ThemeNames = 'base';

export * from './ui'