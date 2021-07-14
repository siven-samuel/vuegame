<template>
  <div class="castle-wrap">
    <div class="castle" :style="{ height: myCastle.castle + 'px' }">

    </div>
    <div class="castle-stats">
      <div class="material-ressoures resources">
        <div class="stat">gold: {{CastleStats.gold}}</div>
        <div class="stat">energy: {{CastleStats.energy}}</div>
        <div class="stat">bricks: {{CastleStats.brick}}</div>
      </div>
      <div class="human-resoures resources">
        <div class="stat">workes: {{CastleStats.brick}}</div>
        <div class="stat">miners: {{CastleStats.brick}}</div>
        <div class="stat">priests: {{CastleStats.brick}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'CastleP1',
    data() {
        return {
            items: null,
        };
    },
    props: ['CastleStats'],
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
    display: flex;
    .resources {
      padding: 15px;
    }
}
</style>
