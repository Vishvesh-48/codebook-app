import { useState } from "react"
import { DashboardCard } from "./componets/DashboardCard"
import { DashboardEmpty } from "./componets/DashboardEmpty"
import { useEffect } from "react"
import { useTitle } from "../../hooks/useTitle"
import { toast } from "react-toastify"

export const DashboardPage = () => {
  useTitle("DashboardPage")
  const [orders, setOrders] = useState([])

  const token = JSON.parse(sessionStorage.getItem("Token"))
  const cbid = JSON.parse(sessionStorage.getItem("cbid"))

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`, {
        method: "Get",
        headers: { "content-type": "application/json", Authorization: `Bearer ${token}` }
      })
      if (!response.ok) {
        throw { message: response.statusText, status: response.status }
      }
      try {
        const data = await response.json()
        setOrders(data)
      } catch (error) {
        toast.error(error.message, { closeButton: true, position: "bottom-center" })
      }

    }
    fetchOrders()
  }, [])


  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>
      <session>
        {orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        ))}
      </session>
      <session>
        {!orders.length && <DashboardEmpty />}
      </session>
    </main>
  )
}
