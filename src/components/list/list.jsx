/* eslint-disable react/prop-types */
import Card from "../card/card";
import "./list.css"

function List({products}){
    return(
        <>
          <div className="list-container">
            <ul>
                {products.map((item,index)=>(
                   <Card key={index}
                    name={item.title}
                    desc = {item.description}
                    price={item.price}
                    image = {item.thumbnail}
                    />
                ))}
            </ul>
          </div>
        
        </>
    )
}

export default List;
