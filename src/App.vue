<script>
import axios from "axios";
import { store } from "./store";

import AppSearch from "./components/AppSearch.vue";
import AppList from "./components/AppList.vue";

export default {
    components: {
        AppSearch,
        AppList
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getList() {
            // FILM LIST
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.store.apiKey}&query=${this.store.searchInput}`)
                .then((resp) => {
                    this.store.movies = resp.data.results;
                    console.log(this.store.movies);
                })

            // SERIES LIST
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${this.store.apiKey}&query=${this.store.searchInput}`)
                .then((resp) => {
                    this.store.series = resp.data.results;
                    console.log(this.store.series);
                })
        }
    }
}

</script>

<template>
    <AppSearch @startSearch="getList" />
    <div class="container">
        <AppList />
    </div>
</template>