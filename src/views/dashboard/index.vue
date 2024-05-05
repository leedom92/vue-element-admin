<template>
  <div class="dashboard-container">
    <div class="text-center">
      <div>Welcome to {{ title }}</div>
      <div>{{ time }}</div>
    </div>
  </div>
</template>

<script>
import { title } from '@/settings'

export default {
  name: 'Dashboard',
  components: {},
  data() {
    return {
      title,
      time: new Date().toLocaleString(),
      inter: null
    }
  },
  computed: {},
  created() {
    this.inter = setInterval(() => {
      this.time = new Date().toLocaleString()
    }, 1000)
  },
  destroyed() {
    clearInterval(this.inter)
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #555;
}
</style>
