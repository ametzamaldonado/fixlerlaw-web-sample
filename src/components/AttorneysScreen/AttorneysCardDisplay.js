import React, { useState } from 'react';
import AttorneyCard from './AttorneyCard';
import AttorneysInfoSetup from './AttorneysInfoSetup';

const attorneysInfo = [
    {
        name: 'Jason L. Fixler',
        file: 'JFixler',
        type: 'Partner',
        email: 'jason.fixler@fixlerlaw.com',
        extension: 301,
        photoLink: null,
    },
    {
        name: 'Paul F. LaGattuta III',
        file: 'PLagattuta',
        type: 'Partner',
        email: 'paul.lagattuta@fixlerlaw.com',
        extension: 302,
        photoLink: null,
    },
    {
        name: 'Jack E. Brackney',
        file: 'JBrackney',
        type: 'Of Counsel',
        email: 'jack.brackney@fixlerlaw.com',
        extension: 303,
        photoLink: null,
    },
    {
        name: 'Vito A. Cardo III',
        file: 'VCardo',
        type: 'Of Counsel',
        email: 'vito.cardo@fixlerlaw.com',
        extension: 306,
        photoLink: null,
    },
    {
        name: 'Clark Whitsett',
        file: 'CWhitsett',
        type: 'Of Counsel',
        email: 'results@fixlerlaw.com',
        extension: null,
        photoLink: null,
    },
    {
        name: 'Ondre Cargill',
        file: 'OCargill',
        type: 'Associate',
        email: 'ondre.cargill@fixlerlaw.com',
        extension: 305,
        photoLink: null,
    },
    {
        name: 'Michael Z. Lembo',
        file: 'MLembo',
        type: 'Associate',
        email: 'michael.lembo@fixlerlaw.com',
        extension: 308,
        photoLink: null,
    },
    {
        name: 'Jonathan J. Pincus',
        file: 'JPincus',
        type: 'Associate',
        email: 'jonathan.pincus@fixlerlaw.com',
        extension: 309,
        photoLink: null,
    }
]

function AttorneysCardDisplay() {
    const [hideInfoDiv, setHiddenInfoDiv] = useState(false);
    const [selectedAtty, setSelectedAtty] = useState('');

    console.log(selectedAtty)

    return (
        <>
            {hideInfoDiv ?
                (<AttorneysInfoSetup selectedAtty={selectedAtty} />)
                :
                (
                    <section class='attorney-section'>
                        <div class="container">
                            <div class="row">

                                <div class="col-md-12">
                                    <div class="section-title-main">
                                        <h2 class="section-title pb-3">Meet Our Attorneys</h2>
                                    </div>
                                </div>

                                {attorneysInfo.map(attorney => (
                                    <AttorneyCard
                                        attorney={attorney}
                                        hideInfoDiv={hideInfoDiv}
                                        setHiddenInfoDiv={setHiddenInfoDiv}
                                        setSelectedAtty={setSelectedAtty} />
                                )
                                )
                                }
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default AttorneysCardDisplay