import VideoBackground from 'vue-responsive-video-background-player'

export const Plugin = {
    install(Vue) {
        Vue.component('video-background', VideoBackground)
    }
};

export default VideoBackground;