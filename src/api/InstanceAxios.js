import axios from "axios";

function getHeaders(){
    console.log('instance')
    const header = {};
    if (localStorage.getItem('token')){
        header.Authorization =  'Bearer ' + localStorage.getItem('token');
    }
    return header;
}

const api = axios.create({
    baseURL: 'http://sergeiapi1/api',
    // headers: {
    //     ...getHeaders()
    // },

})

export {api}
