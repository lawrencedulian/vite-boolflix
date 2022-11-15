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
    <div class="row">
        <div class="col" v-for="movie in store.movies" :key="movie.id">
            <AppCard :item="movie" />
        </div>
    </div>
    <!-- /FILM LIST -->

    <!-- SERIES LIST -->
    <div class="row">
        <div class="col" v-for="serie in store.series" :key="serie.id">
            <AppCard :item="serie" />
        </div>
    </div>
    <!-- /SERIES LIST -->
</template>