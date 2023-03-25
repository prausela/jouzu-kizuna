import { BASE_URL, OK, TIMEOUT } from "../../../UI/config/apiConstants";

const getAllQuestions = async (categoryId, setId) => {
    try {
        const response = await fetch(BASE_URL + `/categories/${categoryId}/sets/${setId}/questions/get`, {
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

const findQuestion = async (categoryId, setId, id) => {
    try {
        const response = await fetch(BASE_URL + `/categories/${categoryId}/sets/${setId}/questions/${id}/get`, {
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
    getAllQuestions,
    findQuestion
};