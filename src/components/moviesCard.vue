<script>
export default {
    name: "moviesCard",
    props: {
        movie: Object
    }
}
</script>

<template>
    <div class="card">
        <div class="description">
            <h4>{{ movie.title }}</h4>
            <h5>{{ movie.original_title }}</h5>
            <h6>{{ movie.original_language }}</h6>
            <p>{{ movie.vote_average }}</p>
        </div>
    </div>
</template>