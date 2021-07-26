import React from "react";
import SideNav from "./SideNav";

function Hamburger({show, toggler}) {
  return (
    <div className="hamburger t:hd" style={{display: (show ? '' : 'none')}}>
      <div className="hamburger__content">
        <header className="hamburger__content__header">
          <h2 className="fs-l fw-bold flex-1 break-word lh-tight">DEV Community</h2>
          <button onClick={toggler} className="flex icon-btn crayons-btn crayons-btn--ghost crayons-btn--icon-rounded js-hamburger-trigger shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="amk0wsi31mdmduzo4bttmf09jyjclijs" className="crayons-icon"><title id="amk0wsi31mdmduzo4bttmf09jyjclijs">Close</title><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path></svg>
          </button>
        </header>
        <div className="p-2">
          <SideNav />
        </div>
      </div>
      <div onClick={toggler} className="hamburger__overlay js-hamburger-trigger"></div>
    </div>
  )
}

export default Hamburger;