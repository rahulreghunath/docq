<template>

</template>

<script>

    export default {
        name: "Logout",
        created() {
            this.$store.dispatch('removeToken')
                .then(response => {
                    this.$router.push({name: 'adminLogin'});
                });
        }
    }
</script>

<style scoped>

</style>