<template>
  <button class="any-u--main" :type="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import './button.scss';
import { reactive, PropType } from 'vue';
import { nativeButtonTypes, nativeType, functionType, functionButtonTypes, buttonSizes, buttonSize } from '../../types';

const nativeButtons: nativeType[] = [
  nativeButtonTypes.Button
];

const styleButtons: functionType[] = [
  functionButtonTypes.Text,
  functionButtonTypes.Main
]

const sizeButtons: buttonSize[] = [
  buttonSizes.Mini,
  buttonSizes.Small,
  buttonSizes.Normal,
  buttonSizes.Large,
  buttonSizes.Full,
]

export default {
  name: 'Button',

  props: {
    /**
     * @description the native button type in html | 按钮在html中的原生类型
     * @default 'button'
     */
    nativeType: {
      type: String as PropType<nativeType>,
      default: 'button',
      validator: (value: nativeType): boolean => nativeButtons.includes(value)
    },
    /**
     * @description the function of button | 按钮的功能
     * @default 'main'
     */
    type: {
      type: String as PropType<functionType>,
      default: 'main',
      validator: (value: functionType): boolean => styleButtons.includes(value)
    },
    size: {
      type: String as PropType<buttonSize>,
      validator: (value: buttonSize): boolean => sizeButtons.includes(value)
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
  },
};
</script>
