import "./products.css"
import AllH from "../footandheader/all-h/h";
import AllF from "../footandheader/all-f/f";
import ProductList from "./productlist/productlist";
import FilterList  from "./filterlist/filterlist";
import stockproductos from "../../data";
import { useState } from "react";


const Products= () => {
    const allCategories= [ 'Todos',...new Set(stockproductos.map(producto => producto.categoria))]
    const [categories, setcategories] = useState(allCategories)
    const [products, setproducts] = useState(stockproductos)
    const filterCategory= (categoria) =>{
        if(categoria === 'Todos'){
            setproducts(stockproductos)
            return
        }

        const filterStock= stockproductos.filter(product => product.categoria === categoria)
        setproducts(filterStock)
        console.log(categoria)
    }
    const [allProducts,setAllProducts]=useState([])
    const [total,setTotal]=useState(0)
    const [countProducts,setCountProducts]=useState(0)
    return(
        <>
        <AllH allProducts={allProducts} 
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        />
        <div className="main-container">
                <div className="children1">

                </div>
                <div className="barra-contenedor" >
                    {/*<form className="barra-form">
                                <input className="input-barra" type="text" placeholder="Buscar..."/>
                                <button className="btn-barra" type="submit">Buscar</button>
                            </form> */}
                </div>
                <FilterList categories={categories} filterCategory={filterCategory}/>
                <ProductList
                products={products}
                setproducts={setproducts}
                allProducts={allProducts} 
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                />
        </div>
        <AllF/>
        
        </>
    )
}

export default Products;