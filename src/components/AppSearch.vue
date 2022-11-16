<script>
import { store } from "../store";

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="d-flex justify-content-between p-2">
        <div class="title">
            <h1>BOOLFLIX</h1>
        </div>
        <div class="search-box d-flex">
            <input type="text" class="form-control" placeholder="Inserisci nome Film" v-model="store.searchInput">

            <button class="btn btn-primary" @click="$emit('startSearch')">Search</button>
        </div>
    </div>

</template>

<style lang="scss">

</style>
        