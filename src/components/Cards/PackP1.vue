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
    created() {

    },
    data() {
        return {
            items: [
                {
                    id: 11,
                    name: 'soldier2',
                    cost: 1,
                    currency: 'gold',
                    effect: 'damange',
                    effectCount: 3,
                },
                                {
                    id: 12,
                    name: 'floor2',
                    cost: 1,
                    currency: 'brick',
                    effect: 'build',
                    effectCount: 3,
                },
                                {
                    id: 13,
                    name: 'knight2',
                    cost: 3,
                    currency: 'gold',
                    effect: 'damange',
                    effectCount: 4,
                },
                                {
                    id: 14,
                    name: 'beam2',
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
    right: 15px;
    .pack {
        margin: 10px;
        background: #801919;
        color: white;
        min-width: 100px;
    }
}
</style>
