import React from 'react'
import Tick from '../assets/tick.svg'


function VerifiedCard() {
  return (
    <div className="status-card">
        <img src={Tick} alt="verified" className='verified-image' />
        <div>
            <p>Status</p>
            <strong>Verified</strong>
        </div>
    </div>
  )
}

export default VerifiedCard