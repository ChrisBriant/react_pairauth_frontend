import { conn } from "../network/network";

function register(payload) {
    return new Promise( async (resolve,reject) => {
        const url = "/auth/signup";

        conn.post(url, payload, {withCredentials: true})
        .then( (response) => {
            return resolve(response.data);
        }).catch((err) => {
            console.error("ERROR REJECT",err);
            return reject(err);
        });
    });
} 


function signIn(payload) {
    return new Promise( async (resolve,reject) => {
        const url = "/auth/signin";

        conn.post(url, payload, {withCredentials: true})
        .then( (response) => {
            return resolve(response.data);
        }).catch((err) => {
            console.error("ERROR REJECT",err);
            return reject(err);
        });
    });
} 


function getSession() {
    return new Promise( async (resolve,reject) => {
        const url = "/auth/session";

        conn.get(url, {withCredentials: true})
        .then( (response) => {
            return resolve(response.data);
        }).catch((err) => {
            console.error("ERROR REJECT",err);
            return reject(err);
        });
    });
} 

function refresh() {
    return new Promise( async (resolve,reject) => {
        const url = "/auth/refresh";

        //It sends null in the body because in this case we are using the cookie for authentication
        conn.post(url,{token:null}, {withCredentials: true})
        .then( (response) => {
            return resolve(response.data);
        }).catch((err) => {
            console.error("ERROR REJECT",err);
            return reject(err);
        });
    });
}

function signOut() {
    return new Promise( async (resolve,reject) => {
        const url = "/auth/logout";

        conn.post(url, {}, {withCredentials: true})
        .then( (response) => {
            return resolve(response.data);
        }).catch((err) => {
            console.error("ERROR REJECT",err);
            return reject(err);
        });
    });
}


export {register,signIn, getSession, refresh,signOut};