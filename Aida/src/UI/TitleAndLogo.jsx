/* eslint-disable react/prop-types */
function TitleAndLogo({children, imgURL, style="", imgStyle=""}) {
    return (
        <div className={` flex gap-3 my-2 pl-4 ${style} text-FlamingoPink font-semibold text-lg `}>
              <img src={imgURL} className={`${imgStyle}`} />
              <p>{children}</p>
            </div>
    )
}

export default TitleAndLogo;
