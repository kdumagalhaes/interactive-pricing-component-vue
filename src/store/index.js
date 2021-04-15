import { createStore } from 'vuex'

export default createStore({
    state: {
        viewsQuantity: '100K',
        price: 16,
        checked: true,
        rangeSlider: 3,
    },
    mutations: {
        SET_VIEWS_QUANTITY(state, newValue) {
            switch (newValue) {
                case 1:
                    state.viewsQuantity = '10K'
                    break
                case 2:
                    state.viewsQuantity = '50K'
                    break
                case 3:
                    state.viewsQuantity = '100K'
                    break
                case 4:
                    state.viewsQuantity = '500K'
                    break
                case 5:
                    state.viewsQuantity = '1M'
                    break
            }
        },
    },
    actions: {
        setViewsQuantity({ commit }, newValue) {
            commit('SET_VIEWS_QUANTITY', newValue)
        },
    },
    getters: {
        $setViewsQuantity(state) {
            return state.viewsQuantity
        },
    },
})
