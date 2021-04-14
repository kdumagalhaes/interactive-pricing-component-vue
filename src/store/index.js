import { createStore } from 'vuex'

export default createStore({
    state: {
        viewsQuantity: '100K',
        price: 16,
        checked: true,
        rangeSlider: 4,
    },
    mutations: {
        SET_DISCOUNT(state) {
            const discount = 0.75
            if (state.checked) {
                return (state.price = state.price * discount)
            } else {
                return state.price
            }
        },
        SET_VIEWS_QUANTITY(state) {
            switch (state.rangeSlider) {
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
        setDiscount({ commit }) {
            commit('SET_DISCOUNT')
        },
        setViewsQuantity({ commit }) {
            commit('SET_VIEWS_QUANTITY')
        },
    },
})
