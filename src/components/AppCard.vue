<script>
import { store } from "../store"

export default {
    name: "AppCard",
    props: {
        item: Object
    },
    data() {
        return {
            store
        }
    },
    computed: {
        getTitle() {
            return this.item.title ? this.item.title : this.item.name;
        },
        getOriginalTitle() {
            return this.item.original_title ? this.item.original_title : this.item.original_name;
        },
        getStars() {
            if (this.item.vote_average) {

            }
        }
    },
    methods: {
        getImage(posterPath) {
            return new URL(`${this.store.imageUrl}/${this.store.posterSize}/${posterPath}`)
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="description">
            <img :src="getImage(item.poster_path)" alt="">
            <h4>{{ getTitle }}</h4>
            <h5>{{ getOriginalTitle }}</h5>
            <h5>{{ item.original_language }}</h5>
            <h5>{{ Math.ceil(item.vote_average / 2) }}</h5>
            <span v-for="stars in Math.ceil(item.vote_average / 2)">
                <font-awesome-icon icon="fa-regular fa-star" />
            </span>
        </div>
    </div>
</template>

<style lang="scss">
.active {
    color: black;
}
</style>