<template>
    <div>
        <h2>
            OPQ
        </h2>
        <hr>
        <!--<router-link :to="/">Home</router-link>-->
        <router-link :to="{ path: '/'}">Home</router-link>
        <router-link :to="{ path: '/contact'}">Contact</router-link>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>