<template>
  <div class="scroll-wrap">
    <cube-scroll
      ref="scroll"
      :direction="direction"
      :data="scrollData"
      :options="options"
      :nestMode="nestMode"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp"
    >
      <slot></slot>
    </cube-scroll>
  </div>
</template>

<script>
export default {
  name: 'scroll-wrap',
  props: {
    scrollData: {
      type: Array,
      default: () => []
    },
    direction: {
      type: String,
      default: 'vertical'
    },
    nestMode: {
      type: String,
      default: 'none'
    },
    options: {
      type: Object,
      default: () => ({/*  bounce: false  */})
    },
    onPullingDown: {
      type: Function,
      default: () => {}
    },
    onPullingUp: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    disable() {
      this.$refs.scroll.disable()
    },
    enable() {
      this.$refs.scroll.enable()
    },
    refresh() {
      this.$refs.scroll.refresh()
    },
    scrollTo(...rest) {
      this.$refs.scroll.scrollTo(...rest)
    },
    scrollToElement(...rest) {
      this.$refs.scroll.scrollToElement(...rest)
    },
  }
}
</script>

