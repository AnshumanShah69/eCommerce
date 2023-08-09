import React, { useState } from 'react'


export default function HomeOffcanvas(props) {

  return (
    <>
      <div className={`offcanvas offcanvas-start ${props.showOffcanvas ? 'show' : ''} `} data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={props.handleClose}></button>
        </div>
        <div className="offcanvas-body">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </div>
    </>
  )
}
////solve the sliding problem and also check the click outside of the offcanvas window to close