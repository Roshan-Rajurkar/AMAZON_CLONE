export const initialState = {
    cart: [],
    user: null, // this get activated when we login to the app
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            }

        case 'REMOVE_FROM_CART':
            // we can have items of same id's so we are finding the fist index of same items (it any)
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            // copying whole cart in newCart 
            let newCart = [...state.cart];

            if (index >= 0) {
                // cut that one item using splice function
                newCart.splice(index, 1)
            } else {
                console.warn(`Cart remove product (id: ${action.id}) as it is not in the cart`)
            }

            return {
                ...state,
                // update the cart by newCart
                cart: newCart
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer;
