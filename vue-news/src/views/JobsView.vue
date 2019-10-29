<template>
    <div>
        <p v-for="job in fetchedJobs">
            <a :href="job.url">{{ job.title }}</a>
            <small>{{ job.time_ago }}, {{ job.domain }}</small>
        </p>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';

    export default {
        computed: {
            // #3
            ...mapGetters([
                'fetchedJobs'
            ])

            // #2
            // ...mapState({
            //     fetchedJobs: state => state.jobs
            // }),

            // #1
            // jobs() {
            //     return this.$store.state;
            // }
        },
        created() {
            this.$store.dispatch('FETCH_JOBS');
        },
    }
</script>

<style>

</style>
