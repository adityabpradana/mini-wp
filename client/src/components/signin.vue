<template>
    <div>
        <b-modal id="modal-login" ref="modal-login" title="Login">
            <b-form id="form-login" @submit.prevent="onSubmit">
                <b-form-group>
                    <b-form-input v-model="email"  type="email" placeholder="Email"></b-form-input>
                </b-form-group>    
            
                <b-form-group>
                    <b-form-input v-model="password" type="password" placeholder="Password"></b-form-input>
                </b-form-group>
            </b-form>

            <template slot="modal-footer">
                <b-button type="submit" form="form-login" variant="primary">Login</b-button>
                <b-button v-google-signin-button="clientId" class="google-signin-button" variant="outline-success"> Continue with Google</b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
import axios from 'axios'
import GoogleSignInButton from 'vue-google-signin-button-directive'
export default {
    directives: {
    GoogleSignInButton
    },
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
            clientId: '778353532272-jjshbcrums065vc1t1e2louklb4fj89s.apps.googleusercontent.com'
        }
    },
    methods: {
        onSubmit(){
            axios({
                method: 'post',
                url: 'http://localhost:3000/api/users/signin',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            .then( ({ data }) => {
                localStorage.setItem('token', data.access_token)
                localStorage.setItem('username', data.username )
                this.$emit('loggedIn')
                this.email = ''
                this.password = ''
                this.$refs['modal-login'].hide()
            })
            .catch( err => {
                this.errorMessage = err
            })
        },
        OnGoogleAuthSuccess (id_token) { 
            axios({
                method: 'post',
                url: 'http://localhost:3000/api/users/signin/google',
                data: {idToken: id_token}
                })
            .then( ({data}) => {
                localStorage.setItem("token", data.access_token)
                localStorage.setItem("username", data.username)
                this.$emit('loggedIn')
            })
            .catch( err => {
                localStorage.setItem('gagal', 'gagal')
            })
        },
        OnGoogleAuthFail (error) {
            console.log(error)
        }
    }
}
</script>
