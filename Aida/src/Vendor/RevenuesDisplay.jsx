import PropTypes from 'prop-types';

function RevenuesDisplay({views, subscriptions, sales, revenues}) {
    return (
        <div className=' bg-white w-max h-max t p-4 px-5 rounded-md text-black'>
            <div>
                <p className=' font-semibold'>Views</p>
                <p>{views}</p>

            </div>
            <div >
                <p className=' font-semibold'>Subscriptions</p>
                <p>{subscriptions}</p>

            </div>
            <div>
                <p className=' font-semibold'>Sales</p>
                <p>{sales}</p>

            </div>
            <div>
                <p className=' font-semibold'>Revenues</p>
                <p>{revenues}</p>

            </div>
            
        </div>
    )
}

RevenuesDisplay.propTypes = {

};

export default RevenuesDisplay;
