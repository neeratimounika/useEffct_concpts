function ProductCard({ title, price, image, rating }) {


  console.log(rating)
  return (
      <div className="card">
          <img src={image} alt={image} />
          <p>{title}</p>
          <p> ${price}</p>
          <p>{rating.rate}</p>

      </div>

  )
}

export default ProductCard