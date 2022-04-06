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
} from '../constants/type'

export function Levels(levels?: levelParams):levelValues {
  return Object.assign({
    top: '999', //    最高
    high: '800', //   高级
    higher: '700', // 较高
    middle: '500', // 中等
    lower: '400', //  较低
    low: '200', //    低级
    bottom: '1', // 最低
  }, levels)
}

export function Status(colors?: statusParams):statusValues {
  return Object.assign({
    most: 'rgba(255, 0, 0, 1)', //   最重要
    more: 'rgba(255, 0, 0, 0.6)', //   重要
    main: 'rgba(0, 0, 0, 1)', //   主要
    second: 'rgba(50, 50, 50, 1)', // 次要
    sub: '', //    附属
    last: '', //   最后
  }, colors)
}

export function Actions(actions?: actionParams): actionValues {
  return Object.assign({
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
    bit: '0.05rem', //    很小/一点
    mini: '0.1rem', //   微小/微量
    small: '0.3rem', //  小/少
    medium: '0.5rem', // 中等
    large: '0.8rem', //  大/多
    huge: '1rem', //   巨大/很多
    super: '1.2rem', //  超大/超多
  }, sizes)
}
