import React from 'react';

const Author = ({val, deleteAuthor}) => {
    console.log(val);
    return (
        <>
            First Name: {val.first_name}<br />
            Last Name: {val.last_name}<br />
            DOB: {val.dob}<br />
            DOD: {val.dod}<br />
            <button onClick={() => deleteAuthor(val._id)} >Delete</button><br /><hr />
        </>
    )
}

export default Author;