<template>
<div class="cards" v-bind:class="[Player === 'castleP1' ? 'hand-p1' : 'hand-p2']">
    <Card @clicked="onClickChild" v-for="item in items" :key="item.id" v-bind:CardData="item"/>
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
                {
                    id: 1,
                    name: 'soldier',
                    cost: 1,
                    currency: 'gold',
                    effect: 'damange',
                    effectCount: 3,
                },
                                {
                    id: 2,
                    name: 'floor',
                    cost: 1,
                    currency: 'brick',
                    effect: 'build',
                    effectCount: 3,
                },
                                {
                    id: 3,
                    name: 'knight',
                    cost: 3,
                    currency: 'gold',
                    effect: 'damange',
                    effectCount: 4,
                },
                                {
                    id: 4,
                    name: 'beam',
                    cost: 4,
                    currency: 'energy',
                    effect: 'damange',
                    effectCount: 6,
                },
            ],
            itemsP2: [
                {
                    id: 2,
                    name: 'floor',
                    cost: 1,
                    currency: 'brick',
                    effect: 'build',
                    effectCount: 3,
                },
                {
                    id: 1,
                    name: 'soldier',
                    cost: 1,
                    currency: 'gold',
                    effect: 'damange',
                    effectCount: 3,
                },
                {
                    id: 3,
                    name: 'knight',
                    cost: 3,
                    currency: 'gold',
                    effect: 'damange',
                    effectCount: 4,
                },
                {
                    id: 4,
                    name: 'beam',
                    cost: 4,
                    currency: 'energy',
                    effect: 'damange',
                    effectCount: 6,
                },
            ],
        };
    },
    created() {
        this.items = this.itemsP1;
    },
    computed: {
        Player() {
        return this.$store.getters.isPlayer;
        },
    },
    methods: {
        onClickChild(value) {
            if (this.Player === 'castleP1') {
                this.items = this.itemsP1;
            } else {
                this.items = this.itemsP2;
            }
            console.log(value);
            // this.items = this.items.filter((item) => (item.id !== value));
            // console.log(this.items);
            // this.items.push(this.$store.state.pack1[0]);
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
