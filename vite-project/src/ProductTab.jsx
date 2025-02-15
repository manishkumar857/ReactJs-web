import Product from "./Product.jsx"
function ProductTab(){
    let options =["flexible","hitech","new"];
    let option2 = {a:"dsa",b:"development"}; //objects
    return(
        
    <>
    <Product title = "laptop" price="34"  features = {options} /> 
    <Product title = "mobile " price={45} /> 
    <Product title = "computer" price="56"/>
    </>
    );
}
export default ProductTab;