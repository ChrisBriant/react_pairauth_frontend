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


export {register};