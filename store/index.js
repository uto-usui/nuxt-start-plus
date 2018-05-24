import Vuex from 'vuex';

const store = () => new Vuex.Store({

  state: {
    productionDomain: '/',
    data: {},
    isNaviOpen: false,
  },
  mutations: {
    pageDataSet (state, value) {
      state.data = value
    },
    naviToggle (state) {
      state.isNaviOpen = !state.isNaviOpen
    },
    naviClose (state) {
      state.isNaviOpen = false
    },
//    increment (state) {
//      state.counter++
//    },
//    number (state, value) {
//      state.counter = value
//    }
  },
  actions: {
//    increment ({commit}) {
//      commit('increment')
//    },
//    number ({commit}, value) {
//      commit('number', value)
//    },
//    async timers ({dispatch}) {
//      let delay = await dispatch('timer', 1000)
//      console.log(delay)
//      delay = await dispatch('timer', 1000)
//      console.log(delay)
//      delay = await dispatch('timer', 2000)
//      console.log(delay)
//      console.log('ok')
//    },
//    timer ({commit}, delay) {
//      return new Promise((resolve, reject) => {
//        setTimeout(() => {
//          resolve(delay)
//        }, delay)
//      })
//    }
  },
  getters: {
    getUrl (state) {
      return state.productionDomain + state.route.path
    }
  }

});

export default store;
