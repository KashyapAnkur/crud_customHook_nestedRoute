import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Author from './Author';
import AuthorForm from './AuthorForm';
import useDataHelper from './useDataHelper';
import {Link, BrowserRouter} from 'react-router-dom';

function Authors() {
    const [authorsList, setAuthorsList] = useDataHelper('/author');
    
    const handleError = (err) => {
        console.log(err);
        // alert(err.toString());
    }
    const deleteAuthor = (id) => {
        // alert(id);
        axios.delete('/author/'+id)
        .then( (res) => {
            console.log(res.data);
            // getAuthors();
        })
        .catch( (err) => {
            handleError(err)
        })
    }
    const addAuthor = (e) => {
        console.log(e);
        // alert(e);
        e.preventDefault();
        const {first_name, last_name, dob,dod} = e.target;
        let authorOb = {
            first_name: first_name.value,
            last_name: last_name.value,
            dob: dob.value,
            dod: dod.value
        }
        axios.post('/author',authorOb)
        .then((res) => {
            console.log(res.data);
            axios.get('/author')
            .then((res) => {
                setAuthorsList(res.data);
            })
            .catch( (err) => {
                handleError("err");
            })
        })
        console.log(authorOb);
    }

    return (
        <>
        {console.log(authorsList)}
            {authorsList.map( (val) => {
                return <Author deleteAuthor={deleteAuthor} val={val} />
            })}

            <AuthorForm addAuthor={addAuthor} /><br />
            <Link to="/modifiedauthors">Modified Authors</Link><br />
        </>
    )
}

export default Authors;