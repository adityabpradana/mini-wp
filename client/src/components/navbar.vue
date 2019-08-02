<template>
    <div>
        <b-navbar toggleable="lg" variant="dark" type="dark">
        <b-navbar-brand href="#" @click.prevent="$emit('toDashboard')">
            <img class="mr-2" src="https://storage.googleapis.com/adityabpradana-hacktiv8/Logo-Sleepless.png" height="32px" alt="">
            MiniWP</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item @click="$emit('toWritePage')">Write</b-nav-item>
            <b-nav-item @click="$emit('toReadPage')">Read</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
                    <b-navbar-nav  v-if="!isLoggedIn" class="ml-auto">
                        <b-nav-item v-b-modal.modal-login>Login</b-nav-item>
                        <b-nav-item v-b-modal.modal-register>Register</b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav v-else-if="isLoggedIn" class="ml-auto">
                        <b-nav-item @click="loggedOut">Logout</b-nav-item>
                    </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <SignIn @loggedIn="loggedIn"></SignIn>
        <SignUp></SignUp>
    </div>
</template>

<script>
import SignUp from '../components/signup'
import SignIn from '../components/signin'
export default {
    data(){
        return {
            isLoggedIn: false
        }
    },
    components: {
        SignUp,
        SignIn
    },
    methods: {
        loggedOut(){
            console.log('logged out')
            localStorage.clear()
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
            });
            this.isLoggedIn = false
        },
        loggedIn(){
            this.isLoggedIn = true
        }
    }
}
</script>

<style>

</style>
