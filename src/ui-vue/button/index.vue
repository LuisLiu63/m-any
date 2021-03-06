<template>
  <button :class="styleClass" :type="button">
    <slot>{{ label }}</slot>
  </button>
</template>

<script lang="ts">
import './button.scss';
import { reactive, PropType, ref } from 'vue';
import { nativeButtonTypes, nativeType, functionType, functionButtonTypes, buttonSizes, buttonSize } from '../type';

const nativeButtons: nativeType[] = [
  nativeButtonTypes.Button
];

const styleButtons: functionType[] = [
  functionButtonTypes.Text,
  functionButtonTypes.Main,
  functionButtonTypes.Second,
  functionButtonTypes.Sub
]

const sizeButtons: buttonSize[] = [
  buttonSizes.Mini,
  buttonSizes.Small,
  buttonSizes.Medium,
  buttonSizes.Large,
  buttonSizes.Huge,
  buttonSizes.Super,
  buttonSizes.Full,
  buttonSizes.Fit,
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
      default: 'small',
      validator: (value: buttonSize): boolean => sizeButtons.includes(value)
    },
    label: {
      type: String
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    const styleClass = ref([
      `any-u--${props.type}`,
      `pad-${props.size}`,
      `text-s-${props.size}`,
    ])
    return {
      styleClass
    }
  },
};
</script>
