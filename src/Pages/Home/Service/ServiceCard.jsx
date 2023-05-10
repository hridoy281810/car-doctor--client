import { FaArrowRight} from 'react-icons/fa';

const ServiceCard = ({service}) => {
    const {title,img,price} = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title">{title}</h2>
  <div className="flex justify-between items-center">
  <p className="text-xl text-orange-600">Price: ${price}</p>
    <button className="btn  btn-outline btn-warning">
  <FaArrowRight className='text-orange-600' />
</button>
  </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;