<script>
import axios from "axios";
import { store } from "./store";

import AppSearch from "./components/AppSearch.vue";


export default {
    components: {
        AppSearch
    },
    data() {
        return {
            store
        }
    },
    created() {
        this.getFilms()
    },
    methods: {
        getFilms() {
            const paramsUrl = {}
            if (this.store.searchInput) {
                paramsUrl.title = this.store.searchInput
            }

            axios.get(`https://api.themoviedb.org/3/movie?api_key=${this.store.apiKey}&query=${this.store.searchInput}`, {
                params: paramsUrl
            })
                .then((resp) => {
                    this.store.films = resp.data.results;
                })
        }

    }
}
</script>

<template>
    <AppSearch />
</template>