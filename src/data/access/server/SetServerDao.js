import { BASE_URL, OK, TIMEOUT } from "../../../UI/config/apiConstants";

const getAllSets = async (categoryId) => {
    try {
        const response = await fetch(BASE_URL + `/categories/${categoryId}/sets/get`, {
            method : "get"
        });
        if (response.status !== OK) {
            return { status: response.status };
        }
        const data = await response.json();
        return { status: response.status, data: data };
    } catch (err) {
        if(err.response){
            return { status : err.response.status }
        }
        return { status : TIMEOUT }
    }
    
}

const findSet = async (categoryId, id) => {
    try {
        const response = await fetch(BASE_URL + `/categories/${categoryId}/sets/${id}/get`, {
            method : "get"
        });
        if (response.status !== OK) {
            return { status: response.status };
        }
        const data = await response.json();
        return { status: response.status, data: data };
    } catch (err) {
        if(err.response){
            return { status : err.response.status }
        }
        return { status : TIMEOUT }
    }
}

export default {
    getAllSets,
    findSet
};