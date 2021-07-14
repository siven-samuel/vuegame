<template>
<div class="card" v-on:click="doCard(CardData)">
    <div class="currency">{{CardData.currency}}</div>
    <div class="cost">{{CardData.cost}}</div>
    <div class="name">{{CardData.name}}</div>
</div>
</template>

<script>
export default {
    name: 'Card',
    data() {
        return {
        };
    },
    props: ['CardData'],
    methods: {
        doCard(msg) {
            // console.log(msg);
            this.$store.commit('increment', msg);
            // console.log(this.$store.state.castleP1);
            this.$store.commit('playerChange');
            // console.log(this.$store.state.player);
            console.log(this.CardData.id);
            this.$emit('clicked', this.CardData.id);
            // console.log(this.$store.state.player);
            // console.log(`player-pack1, ${this.$store.state.pack1}!`);
        },
    },

};
</script>

<style scoped lang="less">
    .card {
        margin: 10px;
        background: #801919;
        color: white;
        min-width: 100px;
    }
</style>
