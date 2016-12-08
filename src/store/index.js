import Vuex from 'vuex'
import Config from './config';
const store = new Vuex.Store({
    state: {
        authorized: false,
        config: Config,
        $router: {},
        user: {}
    },

    mutations: {
        updateRouter(state, data) {
            state.$router = data;
        }
    }
});

export default store;
