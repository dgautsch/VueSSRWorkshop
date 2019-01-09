<template>
    <div>
        <h2>{{ hello }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Homepage',
    computed: {
        hello() {
            return 'Hello World';
        },
    },
};
</script>

<style lang="scss">
body {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #000;
}
</style>
