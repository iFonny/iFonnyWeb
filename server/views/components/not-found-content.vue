<template lang="html">
    <div>
        <section v-if="!parentData.loading.status" class="section section-menu-home">
            <iframe class="rain" src="/assets/ViviRain/ViviRain.html"></iframe>
        </section>
        <section v-if="!parentData.loading.status" class="section section-page">
            <div class="container">
                <div class="page-not-found">404</div>
                <div class="page-not-found-message">Sorry, the page you requested may have been moved or deleted.<br>(En français: T'es perdu comme Vivi)</div>
                <br>
                <a class="page-not-found-link" href="http://twitter.com/iFonny_">
                    <img class="page-not-found-image" border="0" alt="twitter" src="/assets/images/twitter.png">
                </a>
            </div>
        </section>

        <section v-if="parentData.loading.status" class="section section-loading">
            <iframe class="rain" src="/assets/GlandRain/GlandRain.html"></iframe>
            <div class="container">
                <p><img :src="parentData.loading.image" alt="loading">
                {{parentData.loading.message}}</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: ['parentData']
}
</script>

<style>
</style>