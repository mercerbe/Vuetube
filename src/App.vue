<template>
  <div class="main">
    <div class="header">
      <span class="md-display-3">VueTube</span>
    </div>
    <div class="container md-elevation-13">
      <SearchBar @termChange="onTermChange"/>
    </div>
    <div class="row md-elevation-13">
      <VideoDetail :video="selectedVideo"></VideoDetail>
      <!-- bind to send :videos to as prop to videolist from videos in parent -->
      <VideoList @videoSelect="onVideoSelectInApp" :videos="videos"></VideoList>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//dependencies
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
//test api key
const VUE_APP_API_KEY = "AIzaSyDht25O-2lCGrRd3QklvHvzfnZtLK_v5go";
// components
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import Footer from "./components/Footer";

export default {
  //name can help with debugging to identify components
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
    Footer
  },
  data() {
    return {
      videos: [],
      selectedVideo: null
    };
  },
  methods: {
    onTermChange(searchTerm) {
      //hide row if no search term
      let row = document.querySelector(".row");
      if (searchTerm === "") {
        row.style.display = "none";
      } else {
        row.style.display = "block";
      }
      //search for videos from youtube API
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: VUE_APP_API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm
          }
        })
        .then(res => {
          //update data videos object
          this.videos = res.data.items;
        });
    },
    onVideoSelectInApp(video) {
      this.selectedVideo = video;
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #f8f8f8;
  margin-bottom: 1rem;
}
.container {
  background-color: #1de9b6;
}
.row {
  margin-top: 2rem;
  width: 90%;
  margin-left: 5%;
  background-color: #f8f8f8;
  padding: 1rem 0 1rem 0;
  display: none;
}
.main {
  min-height: 100vh;
  width: 100vw;
  position: relative;
  text-align: center;
}
.md-display-3 {
  width: 100%;
  text-align: center;
}
</style>

