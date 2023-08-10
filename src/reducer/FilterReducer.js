export const FilterReducer = (state,action) =>{

    const {type,payload} = action

    switch(type){

        case "PRODUCT_LIST":
            return{productList:payload.products}

        case "SHORT_BY":
            return{...state,shortBy :payload.shortBy}

        case "RATING":
            return{...state,rating : payload.rating}
        
        case "BEST_SELLER_ONLY":
            return {...state, bestSellerOnly:payload.bestSellerOnly}

        case "ONLY_IN_STOCK":
            return{...state, onlyInStock: payload.onlyInStock}
            
        case "CLEAR_FILTER":
            return {...state,
                onlyInStock: false,
                bestSellerOnly:false,
                shortBy:null,
                rating:null
            }    

            default:
                throw new Error("NOT FOUND!.")
    }
}