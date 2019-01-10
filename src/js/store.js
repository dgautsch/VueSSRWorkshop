// import axios from 'axios';
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
            // @todo Use the SET_CATS mutation to set the values from the GET_CATS
            // action and update the store.
        },
        actions: {
            // @todo Create a GET_CATS action that calls https://aws.random.cat/meow
            // and then commits the response to the store.
            // Use axios for your HTTP calls, it is commented out above.
        },
        getters: {
            // @todo write a getter that gets all the cats in the store
        },
    });
}
