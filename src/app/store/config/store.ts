import { createStore } from "vuex";

export const store = createStore({
  state: {
    swiperInstance: null,
  },
  mutations: {
    setSwiperInstance(state, payload) {
      state.swiperInstance = payload;
    },
  },
  actions: {
    setSwiperInstance(context, payload) {
      context.commit("setSwiperInstance", payload);
    },
  },
});
