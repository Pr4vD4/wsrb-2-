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
    baseURL: 'http://med/api',
    // headers: {
    //     ...getHeaders()
    // },

})

export {api}
