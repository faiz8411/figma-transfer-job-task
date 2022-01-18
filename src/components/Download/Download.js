import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt, faPlayCircle } from '@fortawesome/free-solid-svg-icons'


import pic1 from '../../images/Rectangle (1).png'
import pic2 from '../../images/Rectangle (2).png'
import pic3 from '../../images/Rectangle (3).png'
import pic4 from '../../images/Rectangle (4).png'
import './Download.css'

const Download = () => {
    const element = <FontAwesomeIcon icon={faAppleAlt} />
    const element1 = <FontAwesomeIcon icon={faPlayCircle} />
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-6 mobile">
                    <img height="100px" src={pic1} alt="" />

                    <img height="100px" src={pic2} alt="" />
                    <br />
                    <img height="100px" src={pic3} alt="" />
                    <img height="100px" width="100px" src={pic4} alt="" />
                    <img height="100px" width="100px" src={pic4} alt="" />
                </div>
                <div className="col-6">
                    <div className='about-container mb-5 mx-auto '>
                        <h5 style={{ padding: "60px", fontWeight: "bold" }}>Download  The App</h5>
                    </div>
                    <div>
                        <p className='text-pera'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, sapiente est! Officia ducimus optio sunt rem labore sit corporis sequi quos dolorum, unde atque explicabo alias reprehenderit nobis fuga inventore reiciendis deserunt nulla amet quis autem nihil qui repellat necessitatibus.</p>
                    </div>
                    <div className="row">
                        <div className="col-4 div-playlist">

                            <div className='mt-4 '>
                                {element}
                            </div>
                            <div className='mx-2'>
                                <p>availeble <br /> on the plastore</p>
                            </div>

                        </div>
                        <div className="col-4 div-playlist mx-2">

                            <div className='mt-4 '>
                                {element1}
                            </div>
                            <div className='mx-2'>
                                <p>availeble <br /> on the plastore</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Download;