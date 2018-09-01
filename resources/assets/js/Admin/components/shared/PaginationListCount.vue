<template>
    <div>
        <div class="pages" v-if="data.total>0">
            {{ (data.current_page * data.per_page) - data.per_page + 1}}
            to {{ data.total > data.per_page ? (data.current_page * data.per_page) > data.total ? data.total :
            (data.current_page * data.per_page) : data.total }} out of {{ data.total }} entries
        </div>
        <!--<div v-else-if="!initialLoad" class="pages">No Result</div>-->
        <div v-else class="pages">Loading...</div>
    </div>
</template>

<script>
    import * as constants from "../../constants/constants";

    export default {
        name: "PaginationListCount",
        props: {
            data: {
                default: function () {
                    return {
                        current_page: 1,
                        data: [],
                        from: 1,
                        last_page: 1,
                        next_page_url: null,
                        per_page: constants.PAGINATION_COUNT,
                        prev_page_url: null,
                        to: 1,
                        total: 0,
                    }
                }
            }
        },
    }
</script>

<style scoped>
    .pages {
        margin-bottom: 20px;
    }
</style>