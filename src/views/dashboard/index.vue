<script>
import { title } from '@/settings'

export default {
  name: 'Dashboard',
  components: {},
  data() {
    return {
      title,
      time: new Date().toLocaleString(),
      inter: null,
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
  },
}
</script>

<template>
  <div class="dashboard-container">
    <div class="text-center">
      <div class="text-el-primary">
        Welcome to {{ title }}
      </div>
      <div class="pt-4 text-4xl text-el-primary-3">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
  font-size: 3rem;
  color: #555;
}
</style>
