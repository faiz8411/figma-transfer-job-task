import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faPhone, faRetweet } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const email = <FontAwesomeIcon icon={faEnvelopeSquare} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const twetter = <FontAwesomeIcon icon={faRetweet} />
    return (
        <div className='foot-container'>
            <div className="footer-container">
                <div className="row">
                    <div className="col-4">
                        <h2 className='brand'>eatilian</h2>
                        <p className='footer-lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error nisi repellat cum provident reiciendis officiis qui quisquam assumenda praesentium quo?</p>
                        <p className='footer-lorem'>{email} Lorem ipsum dolor sit.</p>
                        <p className='footer-lorem'>{phone} Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="col-2">
                        <div className="line-footer">
                            <h4 className='footer-lorem mt-3'>Lorem, ipsum.</h4>
                            <h5 className='footer-lorem mt-3'>about us</h5>
                            <h5 className='footer-lorem'>our service</h5>
                            <h5 className='footer-lorem'>contact us</h5>
                            <h5 className='footer-lorem'>Lorem, ipsum.</h5>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="line-footer">
                            <h4 className='footer-lorem mt-3'>Lorem, ipsum.</h4>
                            <h5 className='footer-lorem mt-3'>Lorem, ipsum.</h5>
                            <h5 className='footer-lorem'>Lorem, ipsum.</h5>
                            <h5 className='footer-lorem'>Lorem, ipsum.</h5>
                            <h5 className='footer-lorem'>Lorem, ipsum.</h5>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className='dicod'>

                        </div>
                        <p>Powered By <span className='text-warning'>Fleksa</span></p>
                        <div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;