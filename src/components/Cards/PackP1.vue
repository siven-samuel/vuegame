<template>
<div class="pack-wrap p1-pack">
    <div class="pack">
       Player 2 deck
    </div>
</div>
</template>

<script>
export default {
    name: 'PackP1',
    data() {
        return {
            items: [
                {
                    id: 1,
                    name: 'destroy weapons',
                    cost: 4,
                    currency: 'energy',
                    effect: 'remove',
                    target: ['gold'],
                    effectCount: 8,
                    desc: 'destroy 8 enemy weapons',
                    img: 'mini-missle',
                },
                {
                    id: 2,
                    name: 'destroy energy',
                    cost: 4,
                    currency: 'energy',
                    effect: 'remove',
                    target: ['energy'],
                    effectCount: 8,
                    desc: 'destroy 8 enemy energy',
                    img: 'mini-missle',
                },
                {
                    id: 3,
                    name: 'destroy brick',
                    cost: 4,
                    currency: 'energy',
                    effect: 'remove',
                    target: ['brick', 'gold', 'energy'],
                    effectCount: 8,
                    desc: 'destroy 8 enemy bricks',
                    img: 'mini-missle',
                },
                {
                    id: 4,
                    name: 'Evil propaganda',
                    cost: 25,
                    currency: 'energy',
                    effect: 'remove',
                    target: ['reactors', 'miners', 'factories'],
                    effectCount: 1,
                    desc: 'thief 1 enemy reactors, workes, minners',
                    img: 'mini-missle',
                },
                {
                    id: 5,
                    name: 'mini-missle',
                    cost: 1,
                    currency: 'gold',
                    effect: 'remove',
                    target: ['shield'],
                    effectCount: 2,
                    desc: '2 damage enemy',
                    img: 'mini-missle',
                },
                {
                    id: 6,
                    name: 'repair bots',
                    cost: 1,
                    currency: 'brick',
                    effect: 'add',
                    target: ['castle'],
                    effectCount: 2,
                    desc: 'build +2 base',
                    img: 'mini-missle',
                },
                {
                    id: 7,
                    name: 'terrorist attack',
                    cost: 12,
                    currency: 'gold',
                    effect: 'remove',
                    target: ['gold', 'brick', 'energy'],
                    effectCount: 4,
                    desc: 'thief 4 enemy gold, brick, energy',
                    img: 'mini-missle',
                },
                {
                    id: 8,
                    name: 'add reactor',
                    cost: 8,
                    currency: 'energy',
                    effect: 'add',
                    target: ['reactors'],
                    effectCount: 1,
                    desc: 'add 1 reactor for your base',
                    img: 'mini-missle',
                },
                {
                    id: 9,
                    name: 'add warfactory',
                    cost: 8,
                    currency: 'gold',
                    effect: 'add',
                    target: ['factories'],
                    effectCount: 1,
                    desc: 'add 1 factory for your base',
                    img: 'mini-missle',
                },
                                {
                    id: 10,
                    name: 'add minner',
                    cost: 8,
                    currency: 'brick',
                    effect: 'add',
                    target: ['miners'],
                    effectCount: 1,
                    desc: 'add 1 miner for your base',
                    img: 'mini-missle',
                },
                                {
                    id: 11,
                    name: 'Battle droid',
                    cost: 4,
                    currency: 'gold',
                    effect: 'remove',
                    target: ['shield'],
                    effectCount: 6,
                    desc: '6 damage',
                    img: '',
                },
                {
                    id: 12,
                    name: 'Ion Cannon',
                    cost: 21,
                    currency: 'gold',
                    effect: 'remove',
                    target: ['shield'],
                    effectCount: 21,
                    desc: '21 damange',
                    img: '',
                },
                {
                    id: 13,
                    name: 'Ion Cannon',
                    cost: 21,
                    currency: 'energy',
                    effect: 'remove',
                    target: ['shield'],
                    effectCount: 26,
                    desc: '21 damange',
                    img: '',
                },
                {
                    id: 14,
                    name: 'Subspace missle',
                    cost: 18,
                    currency: 'energy',
                    effect: 'remove',
                    target: ['castle'],
                    effectCount: 10,
                    desc: '21 damange ignore Shield',
                    img: '',
                },
                {
                    id: 15,
                    name: 'Soldier',
                    cost: 2,
                    currency: 'energy',
                    effect: 'remove',
                    target: ['shield'],
                    effectCount: 4,
                    desc: '4 damange',
                    img: '',
                },
                {
                    id: 16,
                    name: 'Crane',
                    cost: 18,
                    currency: 'brick',
                    effect: 'add',
                    target: ['castle'],
                    effectCount: 20,
                    desc: 'add 20 your base',
                    img: '',
                },
                {
                    id: 17,
                    name: 'Build Robot',
                    cost: 5,
                    currency: 'brick',
                    effect: 'add',
                    target: ['castle'],
                    effectCount: 5,
                },
                {
                    id: 18,
                    name: 'Atom bomb',
                    cost: 28,
                    currency: 'gold',
                    effect: 'add',
                    target: ['shield'],
                    effectCount: 32,
                    desc: '32 damange',
                    img: '',
                },
                {
                    id: 19,
                    name: 'Teleport Storage',
                    cost: 15,
                    currency: 'gold',
                    effect: 'thief',
                    target: ['gold', 'brick', 'energy'],
                    effectCount: 5,
                    desc: 'thief 5 gold, brick, energy from enemy base',
                    img: '',
                },
                {
                    id: 20,
                    name: 'Povoz',
                    cost: 10,
                    currency: 'brick',
                    effect: 'remove',
                    target: ['castle'],
                    effectCount: 8,
                    desc: 'thief 8 from enemy base',
                    img: '',
                },
                {
                    id: 21,
                    name: 'Replicate Crane',
                    cost: 22,
                    currency: 'energy',
                    effect: 'add',
                    target: ['castle'],
                    effectCount: 22,
                    desc: 'add 22 to base',
                    img: '',
                },
                {
                    id: 22,
                    name: 'Bomber',
                    cost: 10,
                    currency: 'gold',
                    effect: 'remove',
                    target: ['shield'],
                    effectCount: 12,
                    desc: '12 damange',
                    img: '',
                },
                {
                    id: 23,
                    name: 'Build Carier',
                    cost: 39,
                    currency: 'brick',
                    effect: 'add',
                    target: ['castle'],
                    effectCount: 45,
                    desc: '21 damange',
                    img: '',
                },
                {
                    id: 24,
                    name: 'Replicate Weapons',
                    cost: 4,
                    currency: 'energy',
                    effect: 'add',
                    target: ['gold'],
                    effectCount: 8,
                    desc: 'add 8 weapons',
                    img: '',
                },
                {
                    id: 25,
                    name: 'Replicate Energy',
                    cost: 4,
                    currency: 'brick',
                    effect: 'add',
                    target: ['energy'],
                    effectCount: 8,
                    desc: 'generate 8 energy',
                    img: '',
                },
                {
                    id: 26,
                    name: 'Replicate Minerals',
                    cost: 4,
                    currency: 'brick',
                    effect: 'add',
                    target: ['brick'],
                    effectCount: 8,
                    desc: 'add 8 bricks ',
                    img: '',
                },
                {
                    id: 27,
                    name: 'Shield Battery',
                    cost: 1,
                    currency: 'brick',
                    effect: 'add',
                    target: ['shield'],
                    effectCount: 2,
                    desc: 'recharge shiled 4 points',
                    img: '',
                },
                {
                    id: 28,
                    name: 'Shield recharge',
                    cost: 3,
                    currency: 'brick',
                    effect: 'add',
                    target: ['shield'],
                    effectCount: 6,
                    desc: 'recharge shiled 4 points',
                    img: '',
                },
                                {
                    id: 29,
                    name: 'Big Shield recharge',
                    cost: 6,
                    currency: 'brick',
                    effect: 'add',
                    target: ['shield'],
                    effectCount: 12,
                    desc: 'recharge shiled 4 points',
                    img: '',
                },
            ],
        };
    },
    created() {
        function shuffle(card) {
            const a = card;
            for (let i = a.length - 1; i > 0; i -= 1) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }
        this.$store.commit('addPack1', shuffle(this.items));
    },
    methods: {

    },
};
</script>

<style scoped lang="less">
.pack-wrap {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 15px;
    right: 15px;
    .pack {
        margin: 10px;
        background: #801919;
        color: white;
        min-width: 100px;
    }
}
</style>
