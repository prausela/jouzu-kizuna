import { BASE_URL, OK, TIMEOUT } from "../../../UI/config/apiConstants";

const getAllCategories = async () => {
    try {
        const response = await fetch(BASE_URL + `/categories/get`, {
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

const findCategory = async (id) => {
    try {
        const response = await fetch(BASE_URL + `/categories/${id}/get`, {
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
    getAllCategories,
    findCategory
};