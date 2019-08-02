<template>
    <div class="mt-2">
        <b-card-group v-if="show===true">
        <b-card :img-src="article.image_path" :alt="article.title" style="max-height: 180px; max-width: 180px;">
        </b-card>
        <b-card>
            <b-card-text>
                <div class="d-flex justify-content-between">
                <h3>{{article.title}}</h3>
                <b-button-group class="mb-3">
                    <b-button size="sm" variant="outline-warning" @click="showReplaceForm=true; showUpdateForm=false;">Replace</b-button>
                    <b-button size="sm" variant="outline-warning" @click="showUpdateForm=true; showReplaceForm=false;">Update</b-button>
                    <b-button size="sm" variant="outline-danger" @click="deleteArticle(article._id)">Delete</b-button>
                </b-button-group>
                </div>
                <p style="width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    <span v-html="article.content"></span>
                </p>
                <!-- <a href="#">Read more</a><br>     -->
                <i>Author: {{article.author}}</i>
            </b-card-text>    
        </b-card>
        </b-card-group>
        <b-card v-if="showReplaceForm" class="mt-3">
            <b-form @submit.prevent="replaceArticle(article._id)">
                <b-form-input v-model="title" placeholder="Title" class="mt-3"></b-form-input>
                <wysiwyg v-model="content"  class="mt-2"></wysiwyg>
                <b-form-file
                v-model="file"
                placeholder="Choose a file..."
                drop-placeholder="Drop file here..."
                accept="image/*"
                class="mt-2"
                ></b-form-file>
                <b-button type="submit" variant="warning" class="mt-2">Replace</b-button>
            </b-form>
        </b-card>
        <b-card v-if="showUpdateForm" class="mt-3">
            <b-form @submit.prevent="updateArticle(article.id)">
                <b-form-input v-model="title" :placeholder="article.title" class="mt-3"></b-form-input>
                <wysiwyg v-model="content" :placeholder="article.content"  class="mt-2"></wysiwyg>
                <b-form-file
                v-model="file"
                placeholder="Choose a file..."
                drop-placeholder="Drop file here..."
                accept="image/*"
                class="mt-2"
                ></b-form-file>
                <b-button type="submit" variant="warning" class="mt-2">Update</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            message: 'Article Card',
            title: null,
            content: null,
            file: null,
            id: null,
            show: true,
            showReplaceForm: false,
            showUpdateForm: false
        }
    },
    props: ['article'],
    methods: {
        deleteArticle(id){
            this.showReplaceForm = false,
            this.showUpdateForm = false
            axios({
                method: 'delete',
                url: `http://localhost:3000/api/articles/${id}`,
                headers: {
                        token, 
                        username
                    }
            })
            .then( response => {
                this.show = false
            })
            .catch( err => {
                console.log(err)
            })
        },
        replaceArticle(id){
            console.log("replace article")
            let formData = new FormData();
            formData.append('thumbnail', this.file)
            formData.append('content', this.content)
            formData.append('title', this.title)
            formData.append('created_at', new Date())
            let token = localStorage.getItem('token')
            let username = localStorage.getItem('username')
            axios({
                    method: 'put',
                    url: `http://localhost:3000/api/articles/${id}`,
                    config: { headers: { 'Content-Type': 'multipart/form-data' }},
                    data: formData,
                    headers: {
                        token, 
                        username
                    }
                })
            .then( ({ data }) => {
                console.log(data)
            })
            .catch( err => {
                this.errorMessage = err
                console.log(err)
            })
        },
        updateArticle(id){
            console.log("update article")
            let formData = new FormData();
            formData.append('thumbnail', this.file)
            formData.append('content', this.content)
            formData.append('title', this.title)
            formData.append('created_at', new Date())
            let token = localStorage.getItem('token')
            let username = localStorage.getItem('username')
            axios({
                    method: 'patch',
                    url: `http://localhost:3000/api/articles/${id}`,
                    config: { headers: { 'Content-Type': 'multipart/form-data' }},
                    data: formData,
                    headers: {
                        token, 
                        username
                    }
                })
            .then( ({ data }) => {
                console.log(data)
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
