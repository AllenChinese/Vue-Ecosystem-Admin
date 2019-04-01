<template>
  <section class="app-main">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </section>
</template>
<script>
export default {
  name: "AppMain"
};
</script>
<style lang="scss" scoped>
.app-main {
  padding: 0 30px;
  height: 100%;
  box-sizing: border-box;
}
</style>
