<template>
    <div class="mt-3">
        <b-container>
            <b-form @submit.prevent="onSubmit">
                <b-form-input v-model="title" placeholder="Title" class="mt-3"></b-form-input>
                <wysiwyg v-model="content"  class="mt-2"></wysiwyg>
                <b-form-file
                v-model="file"
                placeholder="Choose a file..."
                drop-placeholder="Drop file here..."
                accept="image/*"
                class="mt-2"
                ></b-form-file>
                <b-button type="submit" variant="primary" class="mt-2">Publish</b-button>
            </b-form>
        </b-container>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            title: '',
            content: '',
            file: ''
        }
    },
    methods: {
        onSubmit(){
            console.log("create article")
            let formData = new FormData();
            formData.append('thumbnail', this.file)
            formData.append('content', this.content)
            formData.append('title', this.title)
            formData.append('created_at', new Date())
            let token = localStorage.getItem('token')
            let username = localStorage.getItem('username')
            axios({
                    method: 'post',
                    url: 'http://localhost:3000/api/articles',
                    config: { headers: { 'Content-Type': 'multipart/form-data' }},
                    data: formData,
                    headers: {
                        token, 
                        username
                    }
                })
            .then( ({ data }) => {
                console.log('Added data!')
                this.title= ''
                this.content= ''
                this.file= ''
            })
            .catch( err => {
                this.errorMessage = err
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>
