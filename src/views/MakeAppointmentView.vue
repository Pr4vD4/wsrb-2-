<template>
<div class="container d-flex flex-wrap justify-content-center">
    <SpecialityCard v-bind:specialities="specialities" />
</div>
</template>

<script>
import SpecialityCard from "@/components/SpecialityCard.vue";
import {api} from "@/api/InstanceAxios";
export default {
    name: "MakeAppointmentView",
    components: {SpecialityCard},
    data () {
        return {
            specialities: []
        }
    },
    mounted() {
        this.getSpecialities()
    },
    methods: {
        async getSpecialities() {
            try {
                const {data} = await api.get('/specialities')
                this.specialities = data
                console.log(data)
            } catch (e) {
                console.log(e.response.data)
            }
        }
    }
}
</script>

<style scoped>

</style>
