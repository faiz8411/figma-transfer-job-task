import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill, faCheckCircle, faMale } from '@fortawesome/free-solid-svg-icons'

import img1 from '../../../src/images/Vector (9).png'
import img2 from '../../../src/./images/Vector (2).png'
import img3 from '../../../src/./images/Vector (8).png'
import './Services.css'



const Services = () => {
    const element = <FontAwesomeIcon icon={faMoneyBill} />
    const element1 = <FontAwesomeIcon icon={faCheckCircle} />
    const element2 = <FontAwesomeIcon icon={faMale} />
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-4">


                    <div className='full-circle  '>
                        <img src={img1} alt="" />
                        <div>
                            {element}
                        </div>
                        <img className='hand' src={img1} alt="" />
                    </div>
                    <div className='text-div'>
                        <h6 className='text-h6'>more money</h6>
                    </div>
                    <div className='pera-text' style={{ textAlign: "left", marginLeft: '100px', fontWeight: "" }}>
                        <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Rem beatae <br /> nemo laboriosam deserunt <br /> eligendi ipsam saepe <br /> reprehenderit porro voluptatibus ab!</p>
                    </div>


                </div>
                <div className="col-4">

                    <div>
                        <div className='full-circle  '>

                            <div className='p-4 mb-2s'>
                                {element1}
                            </div>

                        </div>

                    </div>
                    <div className='text-div'>
                        <h6 className='text-h6'>100% Risk Free</h6>
                    </div>
                    <div className='pera-text' style={{ textAlign: "left", marginLeft: '100px', fontWeight: "" }}>
                        <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Rem beatae <br /> nemo laboriosam deserunt <br /> eligendi ipsam saepe <br /> reprehenderit porro voluptatibus ab!</p>
                    </div>

                </div>
                <div className="col-4">

                    <div>
                        <div className='full-circle  p-2'>
                            <img src={img3} alt="" />
                            {element2}
                            <div>

                            </div>

                        </div>

                    </div>
                    <div className='text-div'>
                        <h6 className='text-h6'>Home Delivery</h6>
                    </div>
                    <div className='pera-text' style={{ textAlign: "left", marginLeft: '100px', fontWeight: "" }}>
                        <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Rem beatae <br /> nemo laboriosam deserunt <br /> eligendi ipsam saepe <br /> reprehenderit porro voluptatibus ab!</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Services;