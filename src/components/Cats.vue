<template>
    <div id="cats" class="col-8">
        <button type="button">Get More Cats!</button>
        <!-- Output your cat pictures here -->
        <!-- <p v-for="(cat, idx) in cats" :key="idx"> -->
        <!-- <img :src="cat" class="cat-image"> -->
        <!-- </p> -->
    </div>
</template>

<script>

export default {
    name: 'Cats',
    fetchData() {
        // @todo dispatch an action to get the cats server-side
    },
    computed: {
        // @todo create a computed proprety that calls the getter for cats
    },
    methods: {
        // @todo write a method that dispatches an action to get the cats
    },
};
</script>

<style>
.cat-image {
    max-width: 300px;
    width: 100%;
}
</style>
