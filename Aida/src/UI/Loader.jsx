import ReactLoading from 'react-loading';
function Loader() {
    return (
        
        <div className='flex  items-center justify-center text-FlamingoPink font-bold text-4xl'>
            <p className=' pl-52 mt-[120px] mr-6' >Loading</p>
           <ReactLoading type={"cylon"} color={"#FF897F"} height={'20%'} width={'20%'} className=' inline'/> 
           

        </div>
    )
}

export
 default Loader;
