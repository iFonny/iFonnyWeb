<template lang="html">
    <div>
        <section v-if="!parentData.loading.status" class="section section-menu-home">
            <div class="container">
                <h1 class="title">{{parentData.title}}</h1>
                <h2 class="subtitle">{{parentData}}</h2>
            </div>
        </section>
        <section v-if="!parentData.loading.status" class="section section-page">
            <div class="container">
                <h1 class="title">{{parentData.title}}</h1>
                <h2 class="subtitle">{{parentData}}</h2>
            </div>
        </section>

        <section v-if="parentData.loading.status" class="section section-loading">
            <iframe class="rain" src="/assets/ViviRain/ViviRain.html"></iframe>
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