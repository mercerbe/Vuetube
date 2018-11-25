<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"/>
        <VideoDetail :video="selectedVideo"></VideoDetail>
        <!-- bind to send :videos to as prop to videolist from videos in parent -->
        <VideoList @videoSelect="onVideoSelectInApp" :videos="videos"> </VideoList>
    </div>
</template>

<script>
//dependencies
import dotenv from 'dotenv';
dotenv.config()
import axios from 'axios';
//test api key 
const VUE_APP_API_KEY ="AIzaSyDht25O-2lCGrRd3QklvHvzfnZtLK_v5go";
// components 
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

export default {
    //name can help with debugging to identify components
    name: "App",
    components: {
        SearchBar,
        VideoList,
        VideoDetail
    },
    data() {
        return{ 
            videos: [],
            selectedVideo: null
             };
    },
    methods: {
        onTermChange(searchTerm) {
            //search for videos from youtube API
            axios
                .get("https://www.googleapis.com/youtube/v3/search", {
                    params: {
                        key: VUE_APP_API_KEY,
                        type: "video",
                        part: "snippet",
                        q: searchTerm

                    }
            }).then(res => {
                //update data videos object
                this.videos = res.data.items
            })
        },
        onVideoSelectInApp(video) {
            this.selectedVideo = video;
        }
    } 
}
</script>

<style scoped>

</style>

