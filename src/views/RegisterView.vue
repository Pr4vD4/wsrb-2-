<template>
    <div class="container">
        <form class="row g-3" @submit.prevent="send" ref="form">
            <div class="col-md-4">
                <label for="validationServer00" class="form-label">First name</label>
                <input type="text" class="form-control is-valid" id="validationServer00" v-model="form.first_name" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationServer01" class="form-label">Second name</label>
                <input type="text" class="form-control is-valid" id="validationServer01" v-model="form.second_name" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationServer02" class="form-label">Last name</label>
                <input type="text" class="form-control is-valid" id="validationServer02" v-model="form.last_name" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="col-md-5">
                <label for="validationServerUsername" class="form-label">Email</label>
                <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend3">@</span>
                    <input type="email" class="form-control is-invalid" id="validationServerUsername"
                           aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" v-model="form.email" required>
                    <div id="validationServerUsernameFeedback" class="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <label for="validationServer03" class="form-label">Phone</label>
                <input type="text" class="form-control is-invalid" id="validationServer03"
                       aria-describedby="validationServer03Feedback" v-model="form.phone" required>
                <div id="validationServer03Feedback" class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>

            <div class="col-md-2">
                <label for="validationServer05" class="form-label">Sex</label>
                <select class="form-select" aria-label="Default select example" id="validationServer05" v-model="form.sex" required>
                    <option value="0" selected>Male</option>
                    <option value="1">Female</option>
                </select>
            </div>

            <div class="col-md-5">
                <label for="validationServer06" class="form-label">Password</label>
                <input type="password" class="form-control is-valid" id="validationServer06" v-model="form.password" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="col-md-5">
                <label for="validationServer07" class="form-label">Password confirmation</label>
                <input type="password" class="form-control is-valid" id="validationServer07" v-model="form.password_confirmation" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="col-md-2">
                <label for="validationServer04" class="form-label">Birthday</label>
                <input type="date" class="form-control is-invalid" id="validationServer04"
                       aria-describedby="validationServer03Feedback" v-model="form.birthday" required>
                <div id="validationServer04Feedback" class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3"
                           aria-describedby="invalidCheck3Feedback" v-model="form.rules" required>
                    <label class="form-check-label" for="invalidCheck3">
                        Agree to terms and conditions
                    </label>
                    <div id="invalidCheck3Feedback" class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
        {{ errors }}
    </div>
</template>

<script>
import axios from "axios";
import {api} from "@/api/InstanceAxios";

export default {
    name: "RegisterView",
    data() {
        return {
            form: {
                first_name: '',
                second_name: '',
                last_name: '',
                email: '',
                phone: '',
                sex: '1',
                birthday: '',
                rules: '',
                password: '',
                password_confirmation: '',
            },
            errors: {}
        }
    },
    methods: {
        async send() {
            const form = new FormData(this.$refs.form)
            try {
                const {data} = await api.post('/users', this.form)
                if (data.message === 'success') {
                    alert('Success')
                }
            } catch (e) {
                this.errors = e.response.data
            }
        }
    }
}
</script>

<style scoped>

</style>
