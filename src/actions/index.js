export const Add_products = "Add_products";
export const Add_cart = "Add_cart";
export const Product_view = "product_view";
export const Cart_items = "Cart_items";
export const update_cart = "update_cart";
export const delete_cart = "delete_cart";
export function addproducts(products) {
  return {
    type: Add_products,
    products,
  };
}
export function addCart(cart) {
  return {
    type: Add_cart,
    cart,
  };
}
export function ProductToview(item) {
  return {
    type: Product_view,
    view: item,
  };
}
export function CartItems() {
  return {
    type: Cart_items,
  };
}
export function updateCart(item) {
  return {
    type: update_cart,
    updatedItem: item,
  };
}
export function DeleteCart(item) {
  return {
    type: delete_cart,
    item,
  };
}