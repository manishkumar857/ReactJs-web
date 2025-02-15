import "./Product.css"

function Product({title,price,features,features2}){
    console.log(features)
    return(
        <div className="Product">
        <h1>{title}</h1>
        <h1>price: {price}</h1>
        <p>{features}</p>
        {/* <p>{features2.b}</p> */}
        </div>
    )
}
export default Product;