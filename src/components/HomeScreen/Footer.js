import React from 'react';

function Footer() {
    return (
        <>
            <footer className='page-footer p-5'>
                <div className="container">
                <div className="container-fluid text-center" style={{ fontSize: 'small', color: 'grey' }}>

                    {/* <!-- Grid row --> */}
                    <div className="row d-flex align-items-center">

                        {/* <!-- Copyright --> */}
                        <div className="copyright" >
                            © 2009-2023 Fixler & LaGattuta, LLP. All rights reserved.
                        </div>

                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer