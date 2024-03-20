import food from '../../images/food1.jpg'

const ResCard = ({props}) => {
    // const {title,cuisine,rating,time} =props; //destructuring
    // console.log(props);
    return (
        <div className='layout'>
            <div className='container'>
                <div className='resCard'>
                    <span className='card-image'>
                        <img src={food} alt='card-image' className='image'/>
                    </span>
                    <div className='card-details'>
                        <h3>{props.title}</h3>
                        <h4>{props.cuisine}</h4>
                        <h5>{props.rating} stars</h5>
                        <h5>{props.time} min</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResCard;
