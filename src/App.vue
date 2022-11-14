<script>
import axios from "axios";
import { store } from "./store";

import AppSearch from "./components/AppSearch.vue";
import moviesList from "./components/moviesList.vue";

export default {
    components: {
        AppSearch,
        moviesList
    },
    data() {
        return {
            store
        }
    },
    created() {
        this.getMovies()
    },
    methods: {
        getMovies() {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.store.apiKey}&query=${this.store.searchInput}`)
                .then((resp) => {
                    this.store.movies = resp.data.results;
                    console.log(this.store.movies);
                })
        }

    }
}
</script>

<template>
    <AppSearch @startSearch="getMovies" />
    <div class="container">
        <moviesList />
    </div>
</template>