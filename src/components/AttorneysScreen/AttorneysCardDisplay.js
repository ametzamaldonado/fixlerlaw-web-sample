import React from 'react';
import AttorneyCard from './AttorneyCard';

function AttorneysCardDisplay() {
    const attorneysInfo = [
        {
            name: 'Jason L. Fixler',
            type: 'Partner',
            email: 'jason.fixler@fixlerlaw.com',
            extension: 301,
            photoLink: null,
        },
        {
            name: 'Paul F. LaGattuta III',
            type: 'Partner',
            email: 'paul.lagattuta@fixlerlaw.com',
            extension: 302,
            photoLink: null,
        },
        {
            name: 'Jack E. Brackney',
            type: 'Of Counsel',
            email: 'jack.brackney@fixlerlaw.com',
            extension: 303,
            photoLink: null,
        },
        {
            name: 'Vito A. Cardo III',
            type: 'Of Counsel',
            email: 'vito.cardo@fixlerlaw.com',
            extension: 306,
            photoLink: null,
        },
        {
            name: 'Clark Whitsett',
            type: 'Of Counsel',
            email: 'results@fixlerlaw.com',
            extension: null,
            photoLink: null,
        },
        {
            name: 'Ondre Cargill',
            type: 'Associate',
            email: 'ondre.cargill@fixlerlaw.com',
            extension: 305,
            photoLink: null,
        },
        {
            name: 'Michael Z. Lembo',
            type: 'Associate',
            email: 'michael.lembo@fixlerlaw.com',
            extension: 308,
            photoLink: null,
        },
        {
            name: 'Jonathan J. Pincus',
            type: 'Associate',
            email: 'jonathan.pincus@fixlerlaw.com',
            extension: 309,
            photoLink: null,
        }
    ]
    return (
        <section class="attorney-section">
            <div class="container">
                <div class="row">

                    <div class="col-md-12">
                        <div class="section-title-main">
                            <h2 class="section-title pb-3">Meet Our Attorneys</h2>
                        </div>
                    </div>

                    {attorneysInfo.map(attorney => <AttorneyCard attorney={attorney}/>)}
                </div>
            </div>
        </section>

    )
}

export default AttorneysCardDisplay