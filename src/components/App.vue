<template>
    <div id="app" class="container">
        <div class="col-12">
            <h1>Vue SSR Workshop</h1>
            <!-- route outlet -->
            <router-view />
        </div>
    </div>
</template>

<script>
import '@scss/_simple-grid.scss';

export default {
    name: 'App',
};
</script>
