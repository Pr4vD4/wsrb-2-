<template>
    <div class="card" style="width: 18rem; margin: 0 10px" v-for="spec in specialities">
        <div class="card-body" >
            <h5 class="card-title">{{spec.name}}</h5>
            <RouterLink :to="{path: '/make/appointment/' + spec.id}" class="btn btn-primary mt-2">Записаться</RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    name: "SpecialityCard",
    props: ['specialities']
}
</script>

<style scoped>

</style>
