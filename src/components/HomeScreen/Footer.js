import React from 'react';

function Footer() {
    return (
        <>
            <footer className='page-footer p-5'>
                <div className="container">
                <div className="container-fluid text-center grey-font" style={{ fontSize: 'small' }}>

                    {/* <!-- Grid row --> */}
                    <div className="row d-flex align-items-center">

                        {/* <!-- Copyright --> */}
                        <div className="copyright" >
                            © 2009-2023 Fixler & LaGattuta, LLP. All rights reserved. 
                            <br/>
                            <a href='https://ametza-maldonado-portfolio.netlify.app/' target='_blank' rel="noopener noreferrer" className='grey-font'>developedbyADM</a> 
                        </div>

                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer