import PropTypes from 'prop-types';
import { AiFillCheckSquare } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex gap-2 items-center'> <AiFillCheckSquare className='text-blue-500' /> {feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature : PropTypes.string
}

export default Feature;