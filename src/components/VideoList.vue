<template>
    <ul class="list-unstyled">
        <VideoListItem 
        v-for="video in videos"
        :video="video"
        :key="video.etag"
        @videoSelect="onVideoSelectInList"
        >

        </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";
export default {
    name: "VideoList",
    //components imported 
    components: {
      VideoListItem  
    },
    //props object with key = name and value = type
    props: {
        videos: Array,
    },
    methods: {
        onVideoSelectInList(video) {
            this.$emit("videoSelect", video)
        }
    }
}
</script>

<style scoped>

</style>
