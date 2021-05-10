import React,{useState, useEffect} from 'react';
import axios from 'axios';

const useDataHelper = (url) => {
    const [authorsList, setAuthorsList] = useState([{}]);
    useEffect( () => {
        getAuthors();
    }, []);

    const handleError = (err) => {
        console.log(err);
        // alert(err.toString());
    }
    
    const getAuthors = () => {
        axios.get(url)
        .then( (res) => {
            setAuthorsList(res.data);
            // setAuthorsList(
            //     [
            //         {first_name: "Dipesh", last_name: "Bhamra", dob: "22", dod: "23"},
            //         {first_name: "Bhupesh", last_name: "Verma", dob: "23", dod: "24"},
            //         {first_name: "Mukesh", last_name: "Sharma", dob: "24", dod: "25"},
            //         {first_name: "Kapish", last_name: "Dharma", dob: "25", dod: "26"},
            //         {first_name: "Himesh", last_name: "Sapra", dob: "26", dod: "27"}
            //     ]
            // );
        })
        .catch( (err) => {
            handleError(err);
        })
    }
    return [authorsList, setAuthorsList];
}

export default useDataHelper;