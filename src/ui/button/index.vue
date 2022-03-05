<template>
  <button type="button" class="text-right" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import './button.scss';
import { reactive, computed } from 'vue';

export default {
  name: 'Button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: (value) => ['small', 'normal', 'large', 'full'].indexOf(value) !== -1,
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        '': true,
        '--primary': props.primary,
        '--secondary': !props.primary,
        [`--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
