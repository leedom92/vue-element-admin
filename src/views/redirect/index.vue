<script>
export default {
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: `/${path}`, query }).catch(() => {})
  },
  render(h) {
    return h() // avoid warning message
  },
}
</script>
