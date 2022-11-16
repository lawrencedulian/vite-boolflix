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
        }
    },
    methods: {
        getImage(posterPath) {
            return new URL(`${this.store.imageUrl}/${this.store.posterSize}/${posterPath}`)

        },
        getStars() {
            return Math.ceil(this.item.vote_average / 2)
        }

    }
}
</script>

<template>
    <div class="my-card">
        <div class="card-content card-front">
            <img :src="getImage(item.poster_path)" alt="">
        </div>
        <div class="card-content card-back">
            <h4>{{ getTitle }}</h4>
            <h5>{{ getOriginalTitle }}</h5>
            <h5>{{ item.original_language }}</h5>
            <font-awesome-icon v-for="n in 5" :key="n"
                :icon="n <= getStars() ? 'fa-solid fa-star' : 'fa-regular fa-star'">
            </font-awesome-icon>
        </div>
    </div>
</template>

<style lang="scss">
.my-card {
    perspective: 1000px;
    width: 100%;
    min-height: 350px;
    position: relative;

    img {
        max-height: 350px;
    }
}

.my-card:hover .card-front {
    transform: rotateY(-180deg); //to rotate it towards left
}

.my-card:hover .card-back {
    transform: rotateY(0); // show backside of card on hover
}

.card-content {
    width: 100%;
    max-height: 350px;
    transition: all 2s;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;

    &.card-back {
        transform: rotateY(180deg); //to rotate it towards right
    }
}
</style>