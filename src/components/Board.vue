<template>
  <div class="main">
    <div class="sky">
         <CastleP1/>
         <CastleP2/>
         <Hand/>
         <PackP1/>
         <PackP2/>
    </div>
    <div class="ground">
    </div>
  </div>
</template>

<script>
import CastleP1 from '@/components/Castles/CastleP1.vue';
import CastleP2 from '@/components/Castles/CastleP2.vue';
import Hand from '@/components/Cards/Hand.vue';
import PackP1 from '@/components/Cards/PackP1.vue';
import PackP2 from '@/components/Cards/PackP2.vue';

export default {
  name: 'Board',
  props: {
    msg: String,
  },
  computed: {
    Player() {
      return this.$store.getters.isPlayer;
    },
  },
  components: {
    CastleP1,
    CastleP2,
    Hand,
    PackP1,
    PackP2,
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  .sky {
    background: #e2d09c;
    height: 80%;
    width: 100%;
    position: relative;
  }
  .ground {
    background: #a87b4d;
    height: 20%;
    z-index: 5;
  }
}
</style>
