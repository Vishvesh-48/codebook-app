import { OrderSuccess } from "./componets/OrderSuccess"
import { OrderFail } from "./componets/OrderFail"
import { useLocation } from "react-router-dom"
import { useTitle } from "../../hooks/useTitle"

export const OrderPage = () => {
  useTitle("OrderPage")
  const { state } = useLocation()
  
  return (
  
      <main>
         {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
      </main>
    )
  }
  