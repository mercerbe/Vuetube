<template>
    <li class="media">
        <img class="mr-3" :src="thumbnailUrl" alt="" @click="onVideoSelect"/>
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
    },
    methods: {
        onVideoSelect() {
            this.$emit("videoSelect", this.video)
        }
    }
}
</script>

<style scoped>
    li {
        display: flex;
        cursor: pointer;
    }
    li:hover {
        background-color: #eee;
    }

</style>
