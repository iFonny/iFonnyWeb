<template lang="html">


    <home-content v-if="page === 'home'" :parent-data="$data"></home-content>
    <glands-content v-else-if="page === 'glands'" :parent-data="$data"></glands-content>
    <smurfs-content v-else-if="page === 'smurfs'" :parent-data="$data"></smurfs-content>
    <projets-content v-else-if="page === 'projets'" :parent-data="$data"></projets-content>
    <more-content v-else-if="page === 'more'" :parent-data="$data"></more-content>
    <not-found-content v-else :parent-data="$data"></not-found-content>

</template>

<script>
export default {
    data: function () {
        return {
        }
    }
}
</script>

<style>

</style>