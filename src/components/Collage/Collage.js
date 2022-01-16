import React from 'react';
import './Collage.css'

const Collage = () => {
    return (
        <div className='container'>

            <h5 className='heading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, amet.</h5>
            <div className="row image-gallery">
                <div className="col-4 frack-div" >
                    <img className='frankfruite' src="https://i.ibb.co/Yf23ftR/pexels-sasha-prasastika-2825384.jpg" alt="" />
                    <h5 className='text-frank mx-3'>franckfruit</h5>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className=" mb-3">
                                <img className='berlin' src="https://i.ibb.co/6tBHYMX/download.jpg" alt="" />
                                <h5 className='mx-5 text-frank'>berlin</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="">
                                <img className='berlin' src="https://i.ibb.co/6tBHYMX/download.jpg" alt="" />
                                <h5 className='mx-5 text-frank'>berlin</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className=" mb-3">
                                <img className='berlin' src="https://i.ibb.co/6tBHYMX/download.jpg" alt="" />
                                <h5 className='mx-5 text-frank'>berlin</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className=" mb-3">
                                <img className='berlin' src="https://i.ibb.co/6tBHYMX/download.jpg" alt="" />
                                <h5 className='mx-5 text-frank'>berlin</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collage;