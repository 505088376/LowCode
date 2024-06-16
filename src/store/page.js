export default {
    state: {
        page: {
            id: "",
            components: [{
                compName: 'Button'
            }]
        },
        mutations: {
            updatePage(state, payload) {
                state.page = payload.page
            }
        }
    }
}