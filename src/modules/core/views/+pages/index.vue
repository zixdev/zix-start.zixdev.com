<template>
    <div class="container l-page">
        <section v-if="page.content">
            <h2>
                {{ page.title }}
            </h2>
            <div v-html="page.content"></div>
        </section>
    </div>
</template>

<script type="text/babel">
    import Component from 'vue-class-component'

    @Component
    export default class Name {

        data() {
            return {
                page: {}
            };
        }

        get slug() {
            return this.$route.params.slug;
        }
        mounted() {
            /*
             * Get Page Content On first Call & on change.
             */
            this.getPageContent(this.slug);
            this.$watch('slug', () => {
                this.getPageContent(this.slug);
            });
        }

        /*
         * Load Page Content
         */
        getPageContent(slug) {

            this.$http.get(this.$store.state.config.api_url + 'pages/' + slug)
                .then(response => {
                    this.page = response.data.data;
                });
        }
    }

</script>
<style lang="scss" rel="stylesheet/scss">
    .l-page {
        margin: 50px auto;
    }
</style>
