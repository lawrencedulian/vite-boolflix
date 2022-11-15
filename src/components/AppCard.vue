<script>
export default {
    name: "AppCard",
    props: {
        item: Object
    },
    computed: {
        getTitle() {
            return this.item.title ? this.item.title : this.item.name;
        },
        getOriginalTitle() {
            return this.item.original_title ? this.item.original_title : this.item.original_name;
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="description">
            <h4>{{ getTitle }}</h4>
            <h5>{{ getOriginalTitle }}</h5>
            <h5>{{ item.original_language }}</h5>
            <h5>{{ item.vote_average }}</h5>
        </div>
    </div>
</template>

<style lang="scss">

</style>