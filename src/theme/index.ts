/**
 * Author: luisliu
 * Description: theme setting | 主题设置
 * Time: 2022-03-05 18:02:23
 * Contact: lc63msn@Hotmail.com
 */

import { DefaultOptions } from '../options';
import { CssVarPrefix } from '../constants';

import themeBase from './theme-base';

type ThemeBlock = {
  [key: string]: string;
} | any

type Theme = {
  backgrounds: ThemeBlock,
  colors: ThemeBlock,
  sizes: ThemeBlock,
}

type AllTheme = {
  [base: string]: Theme
}

export const Themes: AllTheme = {
  base: themeBase
}

export const SetTheme = (themeName = DefaultOptions.theme):void => {
  const themedCssVarsMap: Theme = Themes[themeName];
  const rootElement = document.body.style;

  (function loop (obj: any, name:string) {
    for (const key in obj) {
      const _path = `${name}-${key}`;

      typeof obj[key] === 'string'
        ? rootElement.setProperty(_path, obj[key])
        : loop(obj[key], _path)
    }
  })(themedCssVarsMap, CssVarPrefix)
}
