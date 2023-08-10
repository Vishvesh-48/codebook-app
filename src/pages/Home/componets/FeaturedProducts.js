import { ProductCard } from "../../../componet"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export const FeaturedProducts = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {

      const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`)
      if (!response.ok) {
        throw { message: response.statusText, status: response.status } // eslint-disable-line
      }
      try {
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        toast.error(error.message, {closeButton:true,position:"bottom-center"})
      }

    }
    fetchProducts()
  }, [])

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {/* Product Card */}

        {products.map((product) => (

          <ProductCard key={product.id} product={product} />
        ))}

      </div>
    </section>
  )
}
