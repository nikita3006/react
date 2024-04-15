

const ResCard = ({props}) => {
    // const {title,cuisine,rating,time} =props; //destructuring
    // console.log(props);
    return (
        <div className='layout'>
            <div className='container'>
                <div className='resCard'>
                    <div className='card-details'>
                    <span className='card-image'>
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.info.cloudinaryImageId} alt='card-image' className='image'/>
                    </span>
                        <h3>{props.info.name}</h3>
                        <h4>{props.info.cuisines}</h4>
                        <h5>{props.info.avgRating} stars</h5>
                        <h5>{props.info.sla.deliveryTime} min</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResCard;
