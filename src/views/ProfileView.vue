<template>
<div class="container" v-if="profile">
    <p>{{ profile.first_name }}</p>
    <p>{{ profile.second_name }}</p>
    <p>{{ profile.last_name }}</p>
</div>
</template>

<script>
import {api} from "@/api/InstanceAxios";

export default {
    name: "ProfileView",
    data() {
        return {
            profile: ''
        }
    },
    created() {
        this.getProfile();
    },
    methods: {
        async getProfile() {
            try {
                // const {data} = await api.get('users/profile', {
                //     headers: {
                //         Authorization: 'Bearer ' + localStorage.getItem('token')
                //     }
                // })
                api.get('users/profile', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.profile = response.data
                    console.log(response.data)
                })

            } catch (e) {
                console.log(e.response.data)
            }
        }
    }
}
</script>

<style scoped>

</style>
