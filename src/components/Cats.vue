<template>
    <div id="cats" class="col-8">
        <button type="button" @click="getCats">Get More Cats!</button>
        <p v-for="(cat, idx) in cats" :key="idx">
            <img :src="cat" class="cat-image">
        </p>
    </div>
</template>

<script>
import { GET_CATS } from '@js/store';

export default {
    name: 'Cats',
    fetchData({ store }) {
        return store.dispatch(GET_CATS)
            .catch(() => {});
    },
    computed: {
        cats() {
            return this.$store.getters.getCats;
        },
    },
    methods: {
        getCats() {
            this.$store.dispatch(GET_CATS);
        },
    },
};
</script>

<style>
.cat-image {
    max-width: 300px;
    width: 100%;
    background: blue;
}
</style>
