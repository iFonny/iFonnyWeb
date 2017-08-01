<template lang="html">
    <div>
        <section v-if="!parentData.loading.status" class="section section-menu-home">
            <div class="container container-home">
                <a :href="parentData.data.main.youtube.url" id="social-youtube-home">
                    <img :src="parentData.data.main.youtube.image"><br>{{parentData.data.main.youtube.username}}
                </a>
                <a :href="parentData.data.main.discord.url" id="social-discord-home">
                    <img :src="parentData.data.main.discord.image"><br>{{parentData.data.main.discord.username}}
                </a>
                <a :href="parentData.data.main.twitter.url" id="social-twitter-home">
                    <img :src="parentData.data.main.twitter.image"><br>{{parentData.data.main.twitter.username}}
                </a>
            </div>
        </section>
        <section v-if="!parentData.loading.status" class="section section-page">
            <div class="container">
                <h1 class="title">{{parentData.data.title}}</h1>
                <div class="social-list">
                    <a v-for="social in parentData.data.list" :href="social.url"><img :src="social.image">{{social.network}} - <strong>{{social.username}}</strong></a>
                </div>
            </div>
        </section>
        <iframe v-if="!parentData.loading.status" class="rain rain-home" src="/assets/GlandRain/GlandRain.html"></iframe>

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