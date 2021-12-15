import { createStore } from 'vuex';

export default createStore({
  state: {
    player: 'castleP1',
    playerEnemy: 'castleP2',
    castleP1: {
      gold: 50,
      energy: 20,
      brick: 20,
      castle: 30,
      factories: 3,
      reactors: 2,
      miners: 3,
      shield: 0,
      shieldGen: true,
    },
    castleP2: {
      gold: 20,
      energy: 20,
      brick: 20,
      castle: 50,
      factories: 1,
      reactors: 1,
      miners: 1,
      shield: 0,
      shieldGen: true,
    },
    pack1: [],
    pack2: [],
  },
  getters: {
    myCastle: (state) => state.castleP1,
    enemyCastle: (state) => state.castleP2,
    isPlayer: (state) => state.player,
    packp1: (state) => state.pack1,
    packp2: (state) => state.pack2,
  },
  mutations: {
    increment(state, card) {
      // add resources
      state[state.player].brick += state[state.player].factories;
      state[state.player].energy += state[state.player].reactors;
      state[state.player].gold += state[state.player].miners;
      if (!card) {
        return;
      }

      switch (card.effect) {
        case 'add':
            for (let i = 0; i < card.target.length; i += 1) {
              state[state.player][card.target[i]] += card.effectCount;
              if (state[state.player][card.target[i]] > 100) {
                state[state.player][card.target[i]] = 100;
              }
            }
            state[state.player][card.currency] -= card.cost;
            if (state[state.player][card.currency] <= 0) {
              state[state.player][card.currency] = 0;
            }
        break;
        case 'remove':
          for (let i = 0; i < card.target.length; i += 1) {
            let target = [card.target[i]];
            // console.log(state[state.playerEnemy].shield);
            // console.log([card.target[i]][0]);
            if (state[state.playerEnemy].shield === 0 && [card.target[i]][0] === 'shield') {
              console.log('huraaaa');
              target = 'castle';
            }
            state[state.playerEnemy][target] -= card.effectCount;
            if (state[state.playerEnemy][card.target[i]] <= 0) {
              state[state.playerEnemy][card.target[i]] = 0;
            }
          }
          state[state.player][card.currency] -= card.cost;
          if (state[state.player][card.currency] <= 0) {
            state[state.player][card.currency] = 0;
          }
        break;
        case 'thief':
          for (let i = 0; i < card.target.length; i += 1) {
            state[state.playerEnemy][card.target[i]] -= card.effectCount;
            state[state.player][card.target[i]] += card.effectCount;
            if (state[state.playerEnemy][card.target[i]] <= 0) {
              state[state.playerEnemy][card.target[i]] = 0;
            }
          }
          state[state.player][card.currency] -= card.cost;
          if (state[state.player][card.currency] <= 0) {
            state[state.player][card.currency] = 0;
          }
        break;
        default:
      }
    },
    playerChange(state) {
      [state.player, state.playerEnemy] = [state.playerEnemy, state.player];
    },
    addPack1(state, pack) {
      state.pack1 = pack;
    },
    addPack2(state, pack) {
      state.pack2 = pack;
    },
  },
  actions: {
  },
  modules: {
  },
});
