import { CartEmpty } from "./componets/CartEmpty"
import { CartList } from "./componets/CartList"
import { useCart } from "../../context/CartContext"
import { useTitle } from "../../hooks/useTitle"
export const CartPage = () => {
    useTitle("CartPage")
    const { cartList } = useCart()
    // const cartListLength = 1   

    return (
      <main>          
        {cartList.length ? <CartList/> : <CartEmpty />}
      </main>
    )
  }
  