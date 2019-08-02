<template>
    <div>
        <b-modal id="modal-register" title="Register">
            <b-form id="form-register" @submit.prevent="onSubmit">
                <b-form-group>
            <b-form-input v-model="username" placeholder="Username"></b-form-input>
                </b-form-group>
                <b-form-group>
            <b-form-input v-model="email"  type="email" placeholder="Email"></b-form-input>
                </b-form-group>
            <b-form-group>
            <b-form-input v-model="password" type="password" placeholder="Password"></b-form-input>
            </b-form-group>
            </b-form>
            <template slot="modal-footer">
                <b-button form="form-register" type="submit" >Register</b-button>
                <b-button type="reset" @click="resetValue">Reset</b-button>
            </template>
        </b-modal>

    </div>


</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            username: '',
            email: '',
            password: '',
            errMessage: ''
        }
    },
    methods: {
        onSubmit(){
            console.log('Register')
            axios({
                method: 'post',
                url: 'http://localhost:3000/api/users/signup',
                data: {
                    name: this.username,
                    email: this.email,
                    password: this.password
                }
            })
            .then( ({ data }) => {
                console.log('Registered')
            })
            .catch( err => {
                this.errorMessage = err
            })
        },
        resetValue(){
            console.log('Reset')
            this.username = '',
            this.email = '',
            this.password = ''
        }
    }
}
</script>

<style>

</style>
