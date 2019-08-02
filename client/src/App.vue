<template>
    <div>
        <Navbar @toDashboard="toDashboard" @toWritePage="toWritePage" @toReadPage="toReadPage" ></Navbar>
        <WriteComp v-if="page === 'write'"></WriteComp>
        <ReadComp v-else-if="page === 'read'"></ReadComp>
    </div>
</template>

<script>
import Navbar from './components/navbar'
import WriteComp from './components/write-comp'
import ReadComp from './components/read-comp'
export default {
    components: {
        Navbar,
        WriteComp,
        ReadComp
    },
    data(){
        return {
            isLogin: false,
            page: 'homepage',
            navbarColor: 'black'
        }
    },
    methods: {
        toWritePage(){
            console.log('write')
            this.page = 'write'
        },
        toReadPage(){
            console.log('read')
            this.page = 'read'
        },
        toDashboard(){
            console.log('dashboard')
            this.page = 'dashboard'
        }
    }
}
</script>

<style>

</style>
