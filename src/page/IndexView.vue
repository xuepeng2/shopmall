<template>
    <div>
      <g-header></g-header>
      <router-view></router-view>
    </div>
</template>
<script>
import GHeader from '../common/GHeader.vue'
export default {
  components: {
    GHeader
  }
}
</script>
