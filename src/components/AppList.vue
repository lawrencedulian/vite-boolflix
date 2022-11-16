<script>
import { store } from "../store";
import AppCard from "./AppCard.vue"

export default {
    name: "AppList",
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- FILM LIST -->
    <h3>FILM</h3>
    <div class="row row-cols-4 g-4 p-2">
        <div class="col" v-for="movie in store.movies" :key="movie.id">
            <AppCard :item="movie" />
        </div>
    </div>
    <!-- /FILM LIST -->

    <!-- SERIES LIST -->
    <h3>SERIES</h3>
    <div class="row row-cols-4 g-3 p-2">
        <div class="col" v-for="serie in store.series" :key="serie.id">
            <AppCard :item="serie" />
        </div>
    </div>
    <!-- /SERIES LIST -->
</template>