<template>
  {{ $route.params.id }}
</template>

<script>
import router from "../router";

export default {
    name: "MakeAppointmentSpecialityView",
  methods: {
    router() {
      return router
    }
  }
}
</script>

<style scoped>

</style>
