import React from 'react';
import useDataHelper from './useDataHelper';
import Author from './Author';

function AllAuthors() {

    const [authorsList, setAuthorsList] = useDataHelper('/author');
    return (
        <>
            {authorsList && authorsList.map( (val) => (
                <><b>{`${val.first_name} ${val.last_name}`}</b><br /><br /></>
            ))}
        </>
    )
}

export default AllAuthors;