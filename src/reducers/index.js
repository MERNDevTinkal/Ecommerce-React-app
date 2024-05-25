import {
    Add_products,
    Add_cart,
    Product_view,
    Cart_items,
    update_cart,
    delete_cart
  } from "../actions";
  
  let initialState = {
    products: [],
    cart: [],
    itemToDisplay: "",
    totalCart: 0,
  };
  export default function products(state = initialState, actions) {
    switch (actions.type) {
      case Add_products:
        return {
          ...state,
          products: actions.products,
        };
        break;
      case Add_cart:
        let flag = state.cart.indexOf(actions.cart);
        if (flag!==-1) {
          actions.cart.qty += 1;
          return {
            ...state,
          };
        } else {
          return {
            ...state,
            cart: [actions.cart, ...state.cart],
          };
        }
        break;
  
      case Product_view:
        return {
          ...state,
          itemToDisplay: actions.view,
        };
        break;
      case Cart_items:
        let { cart } = state;
        let total = cart.reduce((total, item) => {
          return (total += item.qty);
        }, 0);
        return {
          ...state,
          totalCart: total,
        };
        break;
      case update_cart:
        let index = state.cart.indexOf(actions.updatedItem);
        let updatedCart = null;
        if (index !== -1) {
          state.cart[index] = actions.updatedItem;
          updatedCart = state.cart;
        }
        return {
          ...state,
          cart: [...updatedCart],
        };
      case delete_cart:
        let position = state.cart.indexOf(actions.item);
        state.cart.splice(position, 1);
        return {
          ...state,
        }
      default:
        return state;
    }
  }