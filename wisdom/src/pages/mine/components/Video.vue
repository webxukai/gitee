<template>
  <div>
    <video controls="controls" autoplay="autoplay" loop="loop" width="100%" height="840px" >
  <source src="movie.ogg" type="video/ogg" />
  <source src="http://ips.ifeng.com/video19.ifeng.com/video09/2017/11/06/13202718-102-9987625-135820.mp4?vid=faf78533-94c0-44a0-b26e-8706b5c95b40&uid=0Ommcy&from=v_Free&pver=vHTML5Player_v2.0.0&sver=&se=%E4%B9%A1%E5%9C%9F%E4%BD%9C%E5%9D%8A&cat=94-95&ptype=94&platform=pc&sourceType=h5&dt=1509947746000&gid=H6-UcWk4WWVZ&sign=b31e5e270e0d685909bc0c980fcce852&tm=1551428576604" type="video/mp4" />
</video>
    <!-- <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      customEventName="customstatechangedeventname"
      @ready="playerReadied"
    ></video-player> -->
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      // playerOptions: {
      //   // videojs options
      //   muted: true,
      //   language: "en",
      //   playbackRates: [0.7, 1.0, 1.5, 2.0],
      //   sources: [
      //     {
      //       type: "video/mp4",
      //       src:
      //         "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
      //     }
      //   ],
      //   poster: "/static/images/author.jpg"
      // }
    };
  },
  // mounted() {
  //   console.log("this is current player instance object", this.player);
  // },
  // computed: {
  //   player() {
  //     return this.$refs.videoPlayer.player;
  //   }
  // },
  // methods: {
  //   // listen event
  //   onPlayerPlay(player) {
  //     // console.log('player play!', player)
  //   },
  //   onPlayerPause(player) {
  //     // console.log('player pause!', player)
  //   },
  //   // ...player event

  //   // or listen state event
  //   playerStateChanged(playerCurrentState) {
  //     // console.log('player current update state', playerCurrentState)
  //   },

  //   // player is ready
  //   playerReadied(player) {
  //     console.log("the player is readied", player);
  //     // you can use it to do something...
  //     // player.[methods]
  //   }
  // }
};
</script>

<style>

</style>