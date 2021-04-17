import { createStore } from 'vuex'

export default createStore({
    state: {
        viewsQuantity: '100K',
        prices: [8, 12, 16, 24, 32],
        checked: false,
        rangeSlider: 2,
        discount: 0.75,
    },
    mutations: {
        SET_VIEWS_QUANTITY_AND_PRICE(state, newValue) {
            state.rangeSlider = parseInt(newValue)
            switch (state.rangeSlider) {
                case 0:
                    state.viewsQuantity = '10K'
                    state.prices[0]
                    break
                case 1:
                    state.viewsQuantity = '50K'
                    state.prices[1]
                    break
                case 2:
                    state.viewsQuantity = '100K'
                    state.prices[2]
                    break
                case 3:
                    state.viewsQuantity = '500K'
                    state.prices[3]
                    break
                case 4:
                    state.viewsQuantity = '1M'
                    state.prices[4]
                    break
                default:
                    state.viewsQuantity = '100K'
            }
        },

        SET_DISCOUNT(state, isChecked) {
            state.checked = isChecked
        },
    },
    actions: {
        setViewsQuantityAndPrice({ commit }, newValue) {
            commit('SET_VIEWS_QUANTITY_AND_PRICE', newValue)
        },
        setDiscount({ commit }, isChecked) {
            commit('SET_DISCOUNT', isChecked)
        },
    },
    getters: {
        $setViewsQuantity(state) {
            return state.viewsQuantity
        },
        $setPrice(state) {
            const discount = state.discount
            const isChecked = state.checked
            const pricesWithoutDiscount = state.prices
            const pricesWithDiscount = pricesWithoutDiscount.map(
                (price) => price * discount
            )
            const finalPrices = isChecked
                ? pricesWithDiscount
                : pricesWithoutDiscount
            const finalPrice = finalPrices[state.rangeSlider]
            return finalPrice
        },
    },
})
