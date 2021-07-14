<template>
<div class="pack-wrap p2-pack">
    <div class="pack">
       Player 2 deck
    </div>
</div>
</template>

<script>
export default {
    name: 'PackP2',
    created() {
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    name: 'soldier3',
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
        };
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
    .pack {
        margin: 10px;
        background: #1b1980;
        color: white;
        min-width: 100px;
    }
}
</style>
