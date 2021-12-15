<template>
<div class="card-wrap">
    <div class="cards" v-bind:class="[Player === 'castleP1' ? 'hand-p1' : 'hand-p2']" >
        <Card @clicked="onClickChild" v-for="item in items" :key="item.id" v-bind:CardData="item"/>
    </div>
    <button v-on:click="skipTurn()">Skip</button>
</div>
</template>

<script>
import Card from '@/components/Cards/Card.vue';

export default {
    name: 'Hand',
    data() {
        return {
            items: [
            ],
            itemsP1: [
            ],
            itemsP2: [
            ],
        };
    },
    mounted() {
        let pack1 = this.$store.getters.packp1;
        let pack2 = this.$store.getters.packp2;
        pack1 = pack1.slice(0, 4);
        pack2 = pack2.slice(0, 4);
        this.items = pack1;
        this.itemsP1 = pack1;
        this.itemsP2 = pack2;
        pack1 = this.$store.getters.packp1;
        pack2 = this.$store.getters.packp2;
        pack1 = pack1.slice(4, pack1.length);
        pack2 = pack2.slice(4, pack2.length);
        this.$store.commit('addPack1', pack1);
        this.$store.commit('addPack2', pack2);
    },
    computed: {
        Player() {
            return this.$store.getters.isPlayer;
        },
    },
    methods: {
        skipTurn() {
            this.$store.commit('playerChange');
            if (this.Player === 'castleP1') {
                this.items = this.itemsP1;
            } else {
                this.items = this.itemsP2;
            }
            this.$store.commit('increment', false);
        },
        onClickChild(playedCard) {
            if (this.Player === 'castleP1') {
                this.cardReplace(playedCard, 2);
                this.items = this.itemsP1;
            } else {
                this.cardReplace(playedCard, 1);
                this.items = this.itemsP2;
            }
        },
        cardReplace(playedCard, playerNum) {
            const itemsString = `itemsP${playerNum}`;
            const packString = `packp${playerNum}`;
            const storeMethod = `addPack${playerNum}`;

            this.[itemsString] = this.[itemsString].filter((cards) => cards.id !== playedCard.id);
            let pack1 = this.$store.getters.[packString];
            this.[itemsString].push(pack1[0]);
            pack1.push(playedCard);
            pack1 = pack1.filter((cards) => cards.id !== pack1[0].id);
            this.$store.commit(storeMethod, pack1);
        },
    },
    components: {
        Card,
    },

};
</script>

<style lang="less">
.cards {
    display: flex;
    justify-content: center;
}
</style>
<style scoped lang="less">
.hand-p1 {
    .card {
        background: red;
    }
}
.hand-p2 {
    .card {
        background: blue;
    }
}
</style>
