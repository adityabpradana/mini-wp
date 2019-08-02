<template>
    <div class="mt-3">
        <b-container>
            <b-form @submit.prevent="searchByTitle">
                <b-input-group>
                    <b-form-input v-model="filterKey" placeholder="Search"></b-form-input>
                    <b-input-group-append>
                    <b-button type="submit" variant="outline-success" >Search</b-button>
                    <b-button v-show="isFiltered" variant="outline-danger" @click="isFiltered = false; filterKey = ''">Reset</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-form>
        <div v-if="isFiltered">
        <articleCard v-for="article in filteredArticles" :key="article.id" :article="article"></articleCard>
        </div>
        <div v-else>
        <articleCard v-for="article in articles" :key="article.id" :article="article"></articleCard>
        </div>

        </b-container>
    </div>
</template>

<script>
import articleCard from './article-card'
import axios from 'axios'
export default {
    data(){
        return {
            message: 'Read Components',
            articles: [],
            isFiltered: false,
            filteredArticles: [],
            filterKey: ''
        }
    },
    components : {
        articleCard
    },
    methods:{
        searchByTitle(){
            console.log(this.filterKey)
            this.isFiltered = true
            this.filteredArticles = []
            let re = new RegExp(this.filterKey,'gi')
            console.log(re)
            this.articles.forEach( article => {
                if(article.title.match(re)){
                    this.filteredArticles.push(article)
                }
            })
        }
    },
    created(){
        let token = localStorage.getItem('token')
        let username = localStorage.getItem('username')
        axios({
                method: 'get',
                url: `http://localhost:3000/api/articles`,
                headers: {
                        token, 
                        username
                    }

            })
                .then( ({ data })=> {
                    data.forEach(article => {
                        this.articles.push(article)
                    });
                })
            
                .catch( (err)=> {
                    console.log(err)
                })
    }
}
</script>

<style>

</style>
