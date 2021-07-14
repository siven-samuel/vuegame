import { createStore } from 'vuex';

export default createStore({
  state: {
    player: 'castleP1',
    playerEnemy: 'castleP2',
    castleP1: {
      gold: 50,
      energy: 50,
      brick: 50,
      castle: 100,
      workers: 1,
      priests: 1,
      miners: 1,
    },
    castleP2: {
      gold: 50,
      energy: 50,
      brick: 50,
      castle: 100,
      workers: 1,
      priests: 1,
      miners: 1,
    },
    pack1: [],
    pack2: [],
    pack1Full: [],
    pack2Full: [],
  },
  getters: {
    myCastle: (state) => state.castleP1,
    enemyCastle: (state) => state.castleP2,
    isPlayer: (state) => state.player,
  },
  mutations: {
    increment(state, card) {
      switch (card.effect) {
        case 'build':
          state[state.player].castle += card.effectCount;
          state[state.player].brick -= card.cost;
          break;
        case 'damange':
          state[state.playerEnemy].castle -= card.effectCount;
          state[state.player][card.currency] -= card.cost;
          break;
        default:
      }
    },
    playerChange(state) {
      [state.player, state.playerEnemy] = [state.playerEnemy, state.player];
    },
  },
  actions: {
  },
  modules: {
  },
});
