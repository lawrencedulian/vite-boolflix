import { reactive } from "vue";

export const store = reactive({
    apiKey: "d34af9c57508c52301b208fdd788a77c",
    imageUrl: "https://image.tmdb.org/t/p/",
    posterSize: "original",
    movies: [],
    series: [],
    searchInput: ""
});