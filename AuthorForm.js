import React from 'react';

const AuthorForm = ({addAuthor}) => {
    return (
        <>
            <form onSubmit={addAuthor}>
                <input type="text" placeholder="Enter first name" name="first_name"/><br />
                <input type="text" placeholder="Enter last name" name="last_name"/><br />
                <input type="text" placeholder="Enter Date of birth name" name="dob"/><br />
                <input type="text" placeholder="Enter Date of death" name="dod"/><br />
                <button>Add Author</button>
            </form>
        </>
    )
}

export default AuthorForm;