<template>
    <li class="media">
        <img class="mr3" :src="thumbnailUrl" alt=""/>
        <div class="media-body">
            {{ video.snippet.title }}
        </div>
    </li>
</template>

<script>
export default {
    name: "VideoListItem",
    props: {
        video: Object,
    },
    //format data before referencing in template
    computed: {
        thumbnailUrl() {
            return this.video.snippet.thumbnails.default.url
        }
    }
}
</script>

<style scoped>

</style>
