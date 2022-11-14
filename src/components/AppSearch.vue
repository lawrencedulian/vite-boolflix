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
    <div class="search-box">
        <input type="text" class="form-control" placeholder="Inserisci nome Film" v-model="store.searchInput">
        <button class="btn" @click="$emit('startSearch')">Find</button>
    </div>
</template>