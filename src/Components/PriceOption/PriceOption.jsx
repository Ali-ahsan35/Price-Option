import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {

    const {name, price, features} = option;

    return (
        <div className='bg-stone-700 p-4 rounded-lg text-center text-white flex flex-col'>
            <h2>
                <span className='text-7xl font-bold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-8'>{name}</h4>
            <div className='pl-8 flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature = {feature} ></Feature>)
            }
            </div>
            <button className='my-10 bg-emerald-300 py-4 w-full rounded-lg text-black font-medium hover:bg-amber-500'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option : PropTypes.object
}

export default PriceOption;