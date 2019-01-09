<template>
    <div id="home" class="col-8">
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
