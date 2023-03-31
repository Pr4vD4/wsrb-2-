<template>
    <div class="container mt-5">
        <div class="container">
            <h3 class="text-center">Авторизация</h3>
        </div>
        <form class="d-flex flex-column align-items-center g-3 mt-4" ref="form" @submit.prevent="send">
            <div class="col-md-6">
                <label for="validationServer03" class="form-label">Phone or email</label>
                <input type="text" class="form-control is-invalid" id="validationServer03"
                       aria-describedby="validationServer03Feedback" v-model="form.phone_or_email" required>
                <div id="validationServer03Feedback" class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>

            <div class="col-md-6">
                <label for="validationServer06" class="form-label">Password</label>
                <input type="password" class="form-control is-valid" id="validationServer06" v-model="form.password" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>

            <div class="">
                <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
        <div class="container mt-4 d-flex justify-content-center">
            <RouterLink to="/register" class="page-link">Регистрация</RouterLink>
        </div>
    </div>
</template>

<script>
import {api} from "@/api/InstanceAxios";
import router from "@/router";

export default {
    name: "LoginView",
    data () {
        return {
            form: {
                phone_or_email: '',
                password: ''
            }
        }
    },
    methods: {
        async send() {
            const form = new FormData(this.$refs.form)
            try {
                const {data} = await api.post('/users/auth', this.form)
                if (data.message === 'success') {
                    localStorage.token = data.token;
                    await router.push({name: 'profile'})
                }
            } catch (e) {
                console.log(e.response.data)
            }

        }
    }
}
</script>

<style scoped>

</style>
