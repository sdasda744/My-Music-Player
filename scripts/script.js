new Vue({
    el: "#app",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        thumbPos: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: [
          {
            name: "Away Ta Nay Yar",
            artist: "Derek Millar",
            cover: "https://raw.githubusercontent.com/sdasda744/Music-Player-resources/main/img/cover.png?token=GHSAT0AAAAAACWSPBSQI356OI5I3R4T7LJ6ZXKF2RA",
            source: "https://github.com/sdasda744/Music-Player-resources/raw/main/mp3/Away%20Ta%20Nay%20Yar%20-%20Derek%20Millar%20(%20%E1%80%A1%E1%80%9D%E1%80%B1%E1%80%B8%E1%80%90%E1%80%85%E1%80%BA%E1%80%94%E1%80%B1%E1%80%9B%E1%80%AC%20).mp3",
            url: "https://youtu.be/CgWl3EKgUtk?si=HbUP-oHaF9jZrhzA",
            favorited: false
          },
          {
            name: "Cele Soe",
            artist: "Derek Millar",
            cover: "https://raw.githubusercontent.com/sdasda744/Music-Player-resources/main/img/cover.png?token=GHSAT0AAAAAACWSPBSQI356OI5I3R4T7LJ6ZXKF2RA",
            source: "https://tinyurl.com/y3dzxc6w",
            url: "https://youtu.be/XUmdpa68I88?si=heV_3bZUe_NNMGFy",         
            favorited: false
          },
          {
            name: "Kachalar Marticar",
            artist: "Derek Millar",
            cover: "https://raw.githubusercontent.com/sdasda744/Music-Player-resources/main/img/cover.png?token=GHSAT0AAAAAACWSPBSQI356OI5I3R4T7LJ6ZXKF2RA",
            source: "https://tinyurl.com/4de8n4ww",
            url: "https://youtu.be/xl9xzvYxUew?si=ykG0aU4lJ5sbw4H6",         
            favorited: false
          },
          {
            name: "Ko Si Moh Yay Yar ",
            artist: "Derek Millar",
            cover: "https://raw.githubusercontent.com/sdasda744/Music-Player-resources/main/img/cover.png?token=GHSAT0AAAAAACWSPBSQI356OI5I3R4T7LJ6ZXKF2RA",
            source: "https://tinyurl.com/344bjc9r",
            url: "https://youtu.be/GXN6wK31fz0?si=EDrfc3n0bR7FhhSG",         
            favorited: false
          },
          {
            name: "Kyo Nay Chit Sone",
            artist: "Derek Millar",
            cover: "https://raw.githubusercontent.com/sdasda744/Music-Player-resources/main/img/cover.png?token=GHSAT0AAAAAACWSPBSQI356OI5I3R4T7LJ6ZXKF2RA",
            source: "https://tinyurl.com/vnevtdtb",
            url: "https://youtu.be/5tZFS_7-9PQ?si=oFOU-6aVeAzRviGb",         
            favorited: false
          },
          {
            name: "Ma Pyaw Lite Nae Nout Sone",
            artist: "Derek Millar",
            cover: "https://raw.githubusercontent.com/sdasda744/Music-Player-resources/main/img/cover.png?token=GHSAT0AAAAAACWSPBSQI356OI5I3R4T7LJ6ZXKF2RA",
            source: "https://tinyurl.com/jbndn3jn",
            url: "https://youtu.be/iCGZ1j9-REQ?si=KsUWP86XsJTuP6F3",         
            favorited: false
          },
          {
            name: "Mike Pyit",
            artist: "Derek Millar",
            cover: "https://raw.githubusercontent.com/sdasda744/Music-Player-resources/main/img/cover.png?token=GHSAT0AAAAAACWSPBSQI356OI5I3R4T7LJ6ZXKF2RA",
            source: "https://tinyurl.com/msuzrehf",
            url: "https://youtu.be/trByxXsEYxk?si=fR9YLrvFyLGvBKaN",         
            favorited: false
          },
          {
            name: "Nint Khae Tae Sue",
            artist: "Derek Millar",
            cover: "https://raw.githubusercontent.com/sdasda744/Music-Player-resources/main/img/cover.png?token=GHSAT0AAAAAACWSPBSQI356OI5I3R4T7LJ6ZXKF2RA",
            source: "https://tinyurl.com/4pmn5n8w",
            url: "https://youtu.be/YvTLNp0Lu8A?si=8GPP9xCWvg9_I-Br",         
            favorited: false
          },
          {
            name: "ဘယ်သူချစ်ခိုင်းလဲလို့",
            artist: "Derek Millar",
            cover: "https://tinyurl.com/bdh4wt9h",
            source: "https://tinyurl.com/ys48vwz3",
            url: "https://youtu.be/kxbzNTrq9p8?si=6YSW50rATJS7Kggp",         
            favorited: false
          },
          {
            name: "သဲနု",
            artist: "Derek Millar",
            cover: "https://tinyurl.com/mr38dceh",
            source: "https://tinyurl.com/zts85428",
            url: "https://youtu.be/p0_9UxzwT9g?si=dL1C9ZmwZKYZ5BwE",         
            favorited: false
          },
          {
            name: "သိပ်ချစ်တာပဲ",
            artist: "ဗဒင်",
            cover: "https://tinyurl.com/4rebcd4c",
            source: "https://tinyurl.com/492v4hmb",
            url: "https://youtu.be/y-J5_c1yX0E?si=7Ns5ywMZQsfAywCN",         
            favorited: false
          }
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.thumbPos = (width == 0 ? width : (width == 100 ? width : width - 1)) + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60) || 0;
        let dursec = Math.floor(this.audio.duration - durmin * 60) || 0;
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.thumbPos = (percentage == 0 ? percentage : (percentage == 100 ? percentage : percentage - 1)) + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        if (this.isTimerPlaying)
          this.audio.play();
      },
      clickProgress(e) {
        if (this.isTimerPlaying)
          this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.thumbPos = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if (this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function () {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function () {
        vm.generateTime();
      };
      this.audio.onended = function () {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };
  
      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
    }
  });