<template>
    <div>
        <h2>Home</h2>
        <button @click="click">click</button>
    </div>
</template>

<script>
    import httpRequest from '../mixins/httpRequest.js';

    export default {
        mixins: [httpRequest],
        name: "Home",
        data() {
            return {
                name: 'Rahul'
            };
        },
        methods: {
            click() {
                this.submit({
                    type: 'post',
                    url: 'api/login', data: {
                        username: 'rahul',
                        password: 'password'
                    }
                }).then(data => {
                    console.log(data);
                }).catch(error => {

                });
            },
        }
    }
</script>

<style scoped>

</style>