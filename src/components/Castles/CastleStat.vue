<template>
  <div class="castle-stats">
    <div class="main-stats">
      <div class="stat">base: {{CastleStats.castle}}</div>
      <div class="stat">shield: {{CastleStats.shield}}</div>
    </div>
    <div class="material-ressoures resources">
      <div class="stat">gold: {{CastleStats.gold}}</div>
      <div class="stat">energy: {{CastleStats.energy}}</div>
      <div class="stat">bricks: {{CastleStats.brick}}</div>
    </div>
    <div class="human-resoures resources">
      <div class="stat">workes: {{CastleStats.factories}}</div>
      <div class="stat">miners: {{CastleStats.miners}}</div>
      <div class="stat">priests: {{CastleStats.reactors}}</div>
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
};
</script>

<style scoped lang="less">

.castle-stats {
    position: absolute;
    bottom: -110px;
    width:100%;
    color: white;
    text-align: left;
    padding: 5px 50px;
    display: flex;
    z-index: 10;
    .resources {
      padding: 15px;
    }
}
</style>
