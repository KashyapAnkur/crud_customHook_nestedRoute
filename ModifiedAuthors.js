import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom';
import AllAuthors from './AllAuthors';

function ModifiedAuthors(props) {
    console.log(props);
    return (
        <>
            <Link to={`modifiedauthors/allauthors`}>Show All</Link><br />
        </>
    )
}

export default ModifiedAuthors;