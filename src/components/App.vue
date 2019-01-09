<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col-12">
                <h1>Vue SSR Workshop</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-8">
                <!-- route outlet -->
                <router-view />
            </div>
            <div class="col-4">
                <h2>Navigation</h2>
                <ul>
                    <li>
                        <router-link to="/">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/cats">
                            Cat Pics
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import '@scss/_simple-grid.scss';

export default {
    name: 'App',
};
</script>
