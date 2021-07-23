import React from 'react';
import { useLocation } from 'react-router-dom';

function Search() {
    const location = useLocation();
    const q = location.state.q;
    return (
        <div className="W tx-c pd20 b6 bord b-r5">So tired right now. I can't get the results of <strong><em>{q}</em></strong>. I'll work on it during my next spare time.</div>
    )
}

export default Search;