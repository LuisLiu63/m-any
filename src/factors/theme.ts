/**
 * Author: luisliu
 * Description: theme public function
 * Time: 2022-03-19 11:45:24
 * Contact: lc63msn@Hotmail.com
 */
import {
  levelParams, levelValues,
  statusParams, statusValues,
  actionParams, actionValues,
  sizeParams, sizeValues,
} from '../types'

export function Levels(levels?: levelParams):levelValues {
  return Object.assign({
    top: '', //    最高
    high: '', //   高级
    higher: '', // 较高
    middle: '', // 中等
    lower: '', //  较低
    low: '', //    低级
    bottom: '', // 最低
  }, levels)
}

export function Status(colors?: statusParams):statusValues {
  return Object.assign({
    default: '#cccccc',
    light: 'rgb(255, 255, 255)',
    deep: 'rgb(0, 0, 0)',
    hover: '',
    focus: '',
    active: '',
    normal: '', // 常规
    most: '', //   最重要
    more: '', //   重要
    main: '', //   主要
    second: '', // 次要
    sub: '', //    附属
    last: '', //   最后
  }, colors)
}

export function Actions(actions?: actionParams): actionValues {
  return Object.assign({
    default: '', // 默认
    force: 'rgb(255, 0, 0)', // 强制
    strong: '', // 强烈
    care: '', // 慎重
    relax: '', // 宽松
    prefer: '', // 轻微
    ban: '', // 禁止
  }, actions)
}

export function Sizes(sizes?: sizeParams): sizeValues {
  return Object.assign({
    base: '1rem', //   基础
    bit: '0.05rem', //    很小/一点
    mini: '0.1rem', //   微小/微量
    small: '0.3rem', //  小/少
    medium: '0.5rem', // 中等
    large: '0.8rem', //  大/多
    huge: '1rem', //   巨大/很多
    super: '1.2rem', //  超大/超多
  }, sizes)
}
