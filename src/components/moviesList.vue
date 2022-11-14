<script>
import { store } from "../store";
import moviesCard from "../components/moviesCard.vue"

export default {
    name: "moviesList",
    components: {
        moviesCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="col" v-for="movie in store.movies" :key="movie.id">
            <moviesCard :movie="movie" />
        </div>
    </div>
</template>