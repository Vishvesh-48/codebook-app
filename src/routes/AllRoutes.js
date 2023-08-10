import { Routes ,Route } from "react-router-dom";
import { HomePage,ProductsList,ProductDetail,Login,Register,CartPage, DashboardPage } from "../pages";
import { ProtectedRout } from "./ProtectedRout";
import { OrderPage } from "../pages"
import { PageNotFound } from "../pages/PageNotFound";


export const AllRoutes = () => {
  return (
    <>
      <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="products"  element={<ProductsList />}/>
          <Route path="products/:id"  element={<ProductDetail />}/>
          <Route path="login"  element={<Login />}/>
          <Route path="register"  element={<Register />}/>
          <Route path="cart"  element={<ProtectedRout><CartPage /></ProtectedRout>}/>
          <Route path="order-summery"  element={<ProtectedRout><OrderPage /></ProtectedRout>}/>
          <Route path="Dashboard"  element={<ProtectedRout><DashboardPage /></ProtectedRout>}/>
          <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

