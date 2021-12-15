<template>
<div class="card" v-on:click="doCard(CardData)" v-bind:class="cardClass(playedCard, CardData, )">
    <div class="top-card" v-bind:class="rol">
        <div class="currency">{{CardData.currency}}</div>
        <div class="cost">{{CardData.cost}}</div>
    </div>
    <img alt="Card image" :src="`images/${CardData.img}.jpg`">
    <div class="name">{{CardData.name}}</div>
    <div class="desc">{{CardData.desc}}</div>
</div>
</template>

<script>
export default {
    name: 'Card',
    data() {
        return {
            playedCard: null,
            rol: '',
        };
    },
    props: ['CardData'],
    methods: {
        doCard(msg) {
            this.playedCard = msg.id;
            this.rol = 'swicth';
            setTimeout(() => {
                this.$store.commit('increment', msg);
                this.$store.commit('playerChange');
                this.$emit('clicked', this.CardData);
                this.playedCard = null;
                this.rol = 'ssssssss';
            }, 1000);
        },
        doCardLater(msg) {
            this.$store.commit('increment', msg);
            this.$store.commit('playerChange');
            this.$emit('clicked', this.CardData);
        },
        cardClass(playedCard, CardData) {
            /* eslint-disable */
            const myCastle = this.$store.getters.myCastle;
            /* eslint-enable */
            let cardClasses = '';
            if (myCastle[CardData.currency] < CardData.cost) {
                cardClasses += ' disable';
            }
            if (this.playedCard === CardData.id) {
                cardClasses += ' throw';
            }
            return cardClasses;
        },
    },

};
</script>

<style scoped lang="less">
    .card {
        margin: 10px;
        background: #801919;
        color: white;
        cursor: pointer;
        padding: 10px;
        width: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        img {
            max-width: 100px;
        }
        .top-card {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            width: 100%;
        }
        .name {
            font-size: 16px;
        }
        .desc {
            font-size: 12px;
        }
    }
    .card.throw {
        transition: 0.8s;
        opacity: 0;
        pointer-events:none;
    }
    .card.disable {
        opacity: 0.4;
        pointer-events:none;
    }
</style>
