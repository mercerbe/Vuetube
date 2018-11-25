<template>
    <div class="col-md-8" v-if="video">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" :src="videoUrl" frameborder="0"></iframe>
        </div>
        <div class="details">
            <h4>{{ video.snippet.title }}</h4>
            <p>{{ video.snippet.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "VideoDetail",
    props: {
        video: Object,
    },
    computed: {
        videoUrl() {
            //const videoId = this.video.id.videoId;
            //rewritten because const name and property are the same:
            const {videoId} = this.video.id;
            return `https://youtube.com/embed/${videoId}`
        }
    }
}
</script>

<style scoped>
    .details {
        margin-top: 1rem;
        padding: 1rem;
        border: 0.1rem solid black;
    }
</style>
