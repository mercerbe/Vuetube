<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"/>
        <!-- bind to send :videos to as prop to videolist from videos in parent -->
        <VideoList :videos="videos"> </VideoList>
    </div>
</template>

<script>
//dependencies
import dotenv from 'dotenv';
dotenv.config()
import axios from 'axios';
// components 
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

export default {
    //name can help with debugging to identify components
    name: "App",
    components: {
        SearchBar,
        VideoList
    },
    data() {
        return{ videos: [],};
    },
    methods: {
        onTermChange(searchTerm) {
            //search for videos from youtube API
            axios
                .get("https://www.googleapis.com/youtube/v3/search", {
                    params: {
                        key: process.env.VUE_APP_API_KEY,
                        type: "video",
                        part: "snippet",
                        q: searchTerm

                    }
            }).then(res => {
                //update data videos object
                this.videos = res.data.items
            })
        }
    } 
}
</script>

<style scoped>

</style>

