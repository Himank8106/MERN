import './NewProduct.css'
import ProductForm from './ProductForm';

function NewProduct(props) {

    function saveProduct(productData){
        console.log("i am inside save product");
        console.log(productData);

        props.printFunction(productData);
    }

    return (<div className='new-product'>
        <ProductForm onSaveProd={saveProduct}  />
    </div>)
}

export default NewProduct;