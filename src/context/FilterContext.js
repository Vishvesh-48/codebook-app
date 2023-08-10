import { createContext, useContext, useReducer } from "react"
import { FilterReducer } from "../reducer/FilterReducer"

const filterInitialState = {
    
    productList:[],
    onlyInStock: false,
    bestSellerOnly:false,
    shortBy:null,
    rating:null
}

const FilterContext = createContext(filterInitialState)

export const FilterProvider = ({children}) =>{

    const [state,dispatch] = useReducer(FilterReducer,filterInitialState)

    function initialProductList(products){

        dispatch({
            type:"PRODUCT_LIST",
            payload:{
                products :products
            }
        })
    }

    function bestSeller(products){
        return state.bestSellerOnly ? products.filter(product =>product.best_seller === true) :products
    }
    function inStock(products){
        return state.onlyInStock ? products.filter(product =>product.in_stock === true) : products
    }
    function shortBy(products){
        if(state.shortBy === "lowTohigh"){
            return products.sort((a,b) => Number(a.price) - Number(b.price))
        }
        if(state.shortBy === "highTolow"){
            return products.sort((a,b) => Number(b.price) - Number(a.price))
        }

        return products
    }
    function rating(products){
        if(state.rating === "4STARSABOVE"){
            return products.filter(product => product.rating >=4)
        }
        if(state.rating === "3STARSABOVE"){
            return products.filter(product => product.rating >=3)
        }
        if(state.rating === "2STARSABOVE"){
            return products.filter(product => product.rating >=2)
        }
        if(state.rating === "1STARSABOVE"){
            return products.filter(product => product.rating >=1)
        }
        return products
    }

    const filterProductList = rating(shortBy(inStock(bestSeller(state.productList))))


    const value = { 
       state,
       dispatch,
       products : filterProductList,
       initialProductList
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () =>{
    const context = useContext(FilterContext)
    return context
}

