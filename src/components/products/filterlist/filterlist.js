import '../productlist/productlist.css'
import './filterlist.css'


const FilterList=({categories, filterCategory}) =>{
    return(
        <div className="filtros">
        <div className="categorias">
            <h2>Categorias</h2>
            <ul>
    
            {categories.map(category => (
                <li
                onClick={() => filterCategory(category)}
                key={category}
                >
                {category}
                
                </li>
            ))}
            </ul>
        </div>
        </div>
    )
    }

export default FilterList;

