import axios from 'axios';
import Vuex from 'vuex';

// mutations
export const SET_CATS = 'setCats';

// actions
export const GET_CATS = 'getCats';

/* eslint-disable no-param-reassign */
export default function () {
    return new Vuex.Store({
        state: {
            cats: [],
        },
        mutations: {
            [SET_CATS](state, { data }) {
                state.cats.push(data.file);
            },
        },
        actions: {
            async [GET_CATS]({ commit }) {
                const url = 'https://aws.random.cat/meow';
                const CATS = await axios.get(url, { crossdomain: true });
                return commit(SET_CATS, CATS);
            },
        },
        getters: {
            getCats(state) {
                return state.cats;
            },
        },
    });
}
