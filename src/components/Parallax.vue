<template>
    <div>
        <parallax :speed-factor="0.5" breakpoint="(min-width: 80px)">
            <img class="ui fluid image" src="../assets/photo-1509599589979-3b5a15d2816e.jpeg">
        </parallax>
    </div>
</template>

<script>
import Parallax from  'vue-parallaxy'

export default {
    components: {
        Parallax
    }
}
</script>