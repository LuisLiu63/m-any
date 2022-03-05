<template>
  <div>
    <div class="header">
      {{ title }}
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Panel',

  props: {
    title: {
      type: String,
      required: true,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    return {}
  },
});
</script>
