import "./products.css"
import AllH from "../footandheader/all-h/h";
import AllF from "../footandheader/all-f/f";
import ProductList from "./productlist/productlist";
import { FilterList } from "./filterlist/filterlist";
import stockproductos from "../../data";
import { useState } from "react";


const Products= () => {
    const allCategories= [ ...new Set(stockproductos.map(producto => producto.categoria))]
    const [categories, setcategories] = useState(allCategories)
    const [products, setproducts] = useState(stockproductos)
    const filterCategory= (category) =>{
        console.log(category)
    }
    return(
        <>
        <AllH/>
        <div className="main-container">
                <div className="children1">

                </div>
                <div className="barra-contenedor" >
                            <form className="barra-form">
                                <input className="input-barra" type="text" placeholder="Buscar..."/>
                                <button className="btn-barra" type="submit">Buscar</button>
                            </form>
                </div>
                <FilterList categories={categories} filterCategory={filterCategory}/>
                <ProductList/>
        </div>
        <AllF/>
        
        </>
    )
}

export default Products;