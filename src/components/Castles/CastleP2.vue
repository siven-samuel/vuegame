<template>
  <div class="castle-wrap castle-p2">
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
        return this.$store.getters.enemyCastle;
      },
    },
};
</script>

<style scoped lang="less">
.castle {
    width: 50px;
    height: 50px;
    background: blue;
    position: absolute;
    bottom: 0;
    right: 0;
}
.castle-stats {
    position: absolute;
    bottom: -80px;
    color: white;
    text-align: left;
    right: 0;
    padding: 5px 50px;
}
</style>
<style lang="less">
.castle-p2 {
  .castle-stats {
    right: 0;
    flex-direction: row-reverse;
    text-align: right;
  }
}
</style>
