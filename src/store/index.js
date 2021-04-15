import { createStore } from 'vuex'

export default createStore({
    state: {
        viewsQuantity: '100K',
        price: 16,
        checked: false,
        rangeSlider: 3,
    },
    mutations: {
        SET_VIEWS_QUANTITY_AND_PRICE(state, newValue) {
            state.rangeSlider = parseInt(newValue)

            switch (state.rangeSlider) {
                case 1:
                    state.viewsQuantity = '10K'
                    state.price = 8
                    break
                case 2:
                    state.viewsQuantity = '50K'
                    state.price = 12
                    break
                case 3:
                    state.viewsQuantity = '100K'
                    state.price = 16
                    break
                case 4:
                    state.viewsQuantity = '500K'
                    state.price = 24
                    break
                case 5:
                    state.viewsQuantity = '1M'
                    state.price = 36
                    break
                default:
                    state.viewsQuantity = '100K'
            }
        },

        // SET_DISCOUNT(state, newValue) {
        //     const discount = 0.75
        // },
    },
    actions: {
        setViewsQuantityAndPrice({ commit }, newValue) {
            commit('SET_VIEWS_QUANTITY_AND_PRICE', newValue)
        },
        setDiscount({ commit }, newValue) {
            commit('SET_DISCOUNT', newValue)
        },
    },
    getters: {
        $setViewsQuantity(state) {
            return state.viewsQuantity
        },
    },
})
