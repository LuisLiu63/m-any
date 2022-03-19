// ui/button
export enum nativeButtonTypes {
  Button = 'button'
}
export type nativeType = 'button';

export enum functionButtonTypes {
  Text = 'text',
  Main = 'main',
  Second = 'second'
}
export type functionType = 'text' | 'main';

export enum buttonSizes {
  Mini = 'mini',
  Small = 'small',
  Normal = 'normal',
  Large = 'large',
  Full = 'full'
}

export type buttonSize = 'mini' | 'small' | 'normal' | 'large' | 'full';

// 等级区分 - 参数
export type levelParams = {
  top?: string,
  high?: string,
  higher?: string,
  middle?: string,
  lower?: string,
  low?: string,
  bottom?: string,
}

// 等级区分 - 值
export type levelValues = {
  top: string,
  high: string,
  higher: string,
  middle: string,
  lower: string,
  low: string,
  bottom: string,
}

// 状态 - 参数
export type statusParams = {
  default?: string,
  light?: string,
  deep?: string,
  hover?: string,
  focus?: string,
  active?: string,
  normal?: string,
  most?: string,
  more?: string,
  main?: string,
  second?: string,
  sub?: string,
  last?: string,
}

// 状态 - 值
export type statusValues = {
  default: string,
  light: string,
  deep: string,
  hover: string,
  focus: string,
  active: string,
  normal: string,
  most: string,
  more: string,
  main: string,
  second: string,
  sub: string,
  last: string,
}

// 操作级别 - 参数
export type actionParams = {
  default?: string,
  force?: string,
  strong?: string,
  care?: string,
  relax?: string,
  prefer?: string,
  ban?: string,
}

// 操作级别 - 值
export type actionValues = {
  default: string,
  force: string,
  strong: string,
  care: string,
  relax: string,
  prefer: string,
  ban: string,
}

// 尺寸级别 - 参数
export type sizeParams = {
  base?: string,
  bit?: string,
  mini?: string,
  small?: string,
  medium?: string,
  large?: string,
  huge?: string,
  super?: string,
}

// 尺寸级别 - 值
export type sizeValues = {
  base: string,
  bit: string,
  mini: string,
  small: string,
  medium: string,
  large: string,
  huge: string,
  super: string,
}
