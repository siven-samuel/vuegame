<template>
  <div class="castle-wrap">
    <div class="castle" :style="{ height: myCastle.castle + 'px' }">
    </div>
    <CastleStat v-bind:CastleStats="myCastle"/>
  </div>
</template>

<script>
import CastleStat from '@/components/Castles/CastleStat.vue';

export default {
    name: 'CastleP1',
    data() {
        return {
            items: null,
        };
    },
    components: {
        CastleStat,
    },
    computed: {
      myCastle() {
        return this.$store.getters.myCastle;
      },
    },
};
</script>

<style scoped lang="less">
.castle {
    width: 50px;
    height: 50px;
    background: red;
    position: absolute;
    bottom: 0;
}
.castle-stats {
    position: absolute;
    bottom: -80px;
    color: white;
    text-align: left;
    padding: 5px 50px;
}
</style>
