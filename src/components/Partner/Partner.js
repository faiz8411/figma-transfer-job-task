import React from 'react';
import './Partner.css'

const Partner = () => {
    return (
        <div className='container' >

            <div className=''>
                <div className="row partner-container">

                    <div className="col-4">

                        <div className="line me-5">

                            <div>
                                <p style={{ textAlign: "left", marginRight: "20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellendus quos error accusamus, nam labore quisquam amet provident earum alias consequatur omnis repudiandae sapiente quis quam et illum? Magni, vero.</p>
                                <button className='p-2 mb-5 rounded btn btn-warning'>sign up your store</button>
                            </div>

                        </div>

                    </div>
                    <div className="col-4">
                        <button className='btn btn-warning m-3'>become a partner</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Partner;