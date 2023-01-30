export const FilterList=({categories, filterCategory}) =>{
    return(
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
    )
    }