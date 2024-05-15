import PropTypes from 'prop-types';

function SeasonalOffers({children, title,icon = "" ,styles}) {
    return (
        <div className={`w-full  pl-5 py-4 capitalize text-white text-3xl h-max  ${styles} `}>
            <span className=" inline-block pr-2">{icon}</span>
            <span>{title}</span>
            <div className=" w-screen  h-[300px] mx-auto">
                {children}
            </div>
        </div>
    )
}

SeasonalOffers.propTypes = {
 children: PropTypes.any,
 title: PropTypes.string,
 styles: PropTypes.string,
 icon: PropTypes.any
};

export default SeasonalOffers;
