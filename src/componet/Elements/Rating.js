

export const Rating = ({rating}) => {

    const ratingClass = Array(5).fill(false)

    for(let i = 0;i<rating;i++){
      ratingClass[i] = true    
    }

  return (
    <>
       {ratingClass.map((value,index) => (
          
          value ? (
            <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"/>
          ) : (
            <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"/>
          )

       ))}
    </>
  )
}
