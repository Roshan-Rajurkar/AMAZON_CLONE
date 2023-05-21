export const initialState = {
    cart: [],
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item] // Spread state.cart instead of state
            }

        default:
            return state;
    }
}


export default reducer