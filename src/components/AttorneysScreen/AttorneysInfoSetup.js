import React from 'react';
import CWhitsett from '../../pages/attorneys/CWhitsett';
import JBrackney from "../../pages/attorneys/JBrackney";
import JFixler from "../../pages/attorneys/JFixler";
import JPincus from "../../pages/attorneys/JPincus";
import MLembo from "../../pages/attorneys/MLembo";
import OCargill from "../../pages/attorneys/OCargill";
import PLagattuta from "../../pages/attorneys/PLagattuta";
import VCardo from "../../pages/attorneys/VCardo"
import "./AttorneysInfoSetup.css"

function AttorneysInfoSetup({ selectedAtty }) {
  const selected = () => {
    switch (selectedAtty) {
      case 'CWhitsett':
        return <CWhitsett />
      case 'JBrackney':
        return <JBrackney />
      case 'JFixler':
        return <JFixler />
      case 'JPincus':
        return <JPincus />
      case 'MLembo':
        return <MLembo />
      case 'OCargill':
        return <OCargill />
      case 'PLagattuta':
        return <PLagattuta />
      case 'VCardo':
        return <VCardo />
    }
  }
  return (
    <section className='attorneys-display'>
      <div className='container p-5'>
        <div className='row py-2'>
          {
            selectedAtty ?
              selected(selectedAtty)
              : null
          }
          
        </div>
        <div className="text-center">
          <a href="/attorneys" type="button" class="btn btn-primary">back</a>
        </div>
      </div>
    </section>
  )
}

export default AttorneysInfoSetup