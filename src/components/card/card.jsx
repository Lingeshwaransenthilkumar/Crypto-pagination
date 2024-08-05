import "./card.css"

const Card = ({image,name,desc,price})=>{
    const description= desc.length>50 ? desc.substring(0,49)+".." : desc;

    return(
        <div className="card">
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="name">
                <h4>{name}</h4>
            </div>
            <div className="desc">
                <p>{description}</p>
            </div>
            <div className="price">
                $ {price}
            </div>
        
        </div>
    )
}

export default Card