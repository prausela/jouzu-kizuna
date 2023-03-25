import SetLocalDao from "./SetLocalDao";

const getAllQuestions = async (categoryId, setId) => {
    const setWithDetails = await SetLocalDao.findSet(categoryId, setId);
    return setWithDetails.questions;
}

const findQuestion = async (categoryId, setId, id) => {
    const setWithDetails = await SetLocalDao.findSet(categoryId, setId);
    return setWithDetails.questions.filter(q => q.id == id)[0];
}

export default {
    getAllQuestions,
    findQuestion
};