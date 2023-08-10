import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Rating } from "../componet"
import { useTitle } from "../hooks/useTitle"
import { useCart } from "../context/CartContext"
import { toast } from "react-toastify"


export const ProductDetail = () => {

  const { cartList, addToCart, removeFromCart } = useCart()
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [incart, setInCart] = useState(false)


  const { name, overview, long_description, price, poster, rating, in_stock, size, best_seller } = product
  useTitle(product.name)

  useEffect(() => {
    const isInCart = cartList.find(item => item.id === product.id)

    if (isInCart) {
      setInCart(true)
    } else {
      setInCart(false)
    }
  }, [cartList, product.id])

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`)
      if (!response.ok) {
        throw { messeage: response.statusText, status: response.status } // eslint-disable-line
      }
      try {
        const data = await response.json()
        setProduct(data)
      } catch (error) {
         toast.error(error.messeage , {closeButton:true})
      }

    }
    fetchProduct()
  }, [id])



  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{name}</h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{overview}</p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={poster} alt={name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{price}</span>
            </p>
            <p className="my-3">
              <span>
                {/* <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                    <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                    <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                    <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                    <i className="text-lg bi bi-star text-yellow-500 mr-1"></i> */}

                <Rating rating={rating} />
              </span>
            </p>
            <p className="my-4 select-none">
              {best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>
              )}
              {in_stock && (
                <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>
              )}
              {!in_stock && (
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>
              )}

              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{size} MB</span>
            </p>
            <p className="my-3">
              {!incart && <button onClick={() => addToCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>}
              {incart && <button onClick={() => removeFromCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"}>Remove Item <i className="ml-1 bi bi-trash3"></i></button>}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
