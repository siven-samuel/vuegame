<template>
  <div class="castle-wrap castle-p2" style="right: 50px">
    <div class="castle" :style="{ height: myCastle.castle + '%' }">
    </div>
    <div class="reactors-wrap additional-wrap">
      <div class="reactors additional" :style="{ height: addons(myCastle.reactors) + '%' }">
      </div>
    </div>
    <div class="factories-wrap additional-wrap">
      <div class="factories additional" :style="{ width: addons(myCastle.factories) + '%' }">
      </div>
    </div>
    <div class="miners-wrap additional-wrap">
      <div class="miners additional" :style="{ height: addons(myCastle.miners) + '%' }">
      </div>
    </div>
    <div class="shieldGen" v-show="myCastle.shieldGen">
    </div>
    <div class="shield">
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
    methods: {
      addons(value) {
        return (value * 10) * 2;
      },
    },
    computed: {
      myCastle() {
        return this.$store.getters.enemyCastle;
      },
    },
};
</script>

<style scoped lang="less">
.castle-wrap {
  height: 305px;
  width: 288px;
  position: absolute;
  bottom: 0;
  .castle {
    width: 100%;
    height: 20px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    background-image: url('http://localhost:8080/images/base1-small.png');
    filter: hue-rotate(155deg);
    background-size: cover;
    background-position: bottom;
    transform:scaleX(-1);
  }
  .additional-wrap {
    position: absolute;
    bottom: 0;
    width: 100%;
    .additional {
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      background-size: contain;
    }
  }
  .reactors-wrap {
    max-width: 45px;
    height: 127px;
    right: 0;
    .reactors {
      background-image: url('http://localhost:8080/images/reactor.png');
      bottom: 0;
      background-position: bottom;
    }
  }
  .factories-wrap {
    max-width: 127px;
    height: 19px;
    right: 60px;
    .factories {
      background-image: url('http://localhost:8080/images/hause.png');
      filter: hue-rotate(155deg);
      background-position: left;
    }
  }
  .miners-wrap {
    max-width: 24px;
    height: 104px;
    left: -32px;
    .miners {
      background-image: url('http://localhost:8080/images/minner.png');
      filter: hue-rotate(155deg);
      background-position: bottom;
    }
  }
  .shieldGen {
    background-image: url('http://localhost:8080/images/shieldgen.png');
    width: 24px;
    height: 88px;
    background-size: contain;
    filter: hue-rotate(155deg);
    position: absolute;
    left: 38px;
    bottom: -1px;
  }
  .shield {
    width: 424px;
    height: 523px;
    position: relative;
    right: 85px;
    bottom: 77px;
    border-radius: 100%;
    box-shadow: inset 0px 0px 47px 29px #22caff;
  }
}
.castle-stats {
    position: absolute;
    bottom: -110px;
    color: white;
    text-align: left;
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
