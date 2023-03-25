import SetServerDao from "../data/access/server/SetServerDao";
import CategoryServerDao from "../data/access/server/CategoryServerDao";
import QuestionServerDao from "../data/access/server/QuestionServerDao";

const getRemoteCategories = async () => {
    const response      = await CategoryServerDao.getAllCategories();
    const categoryDtos  = response.data;
    const categories    = categoryDtos.map(c => ({id : c.id, name: c.name}));
    return categories;
}

const _getRemoteCategoriesWithSets = async (categories) => {
    const categoriesWSets = await Promise.all(categories.map(async (c) => {
        const response  = await SetServerDao.getAllSets(c.id);
        const setDtos   = response.data;
        const sets      = setDtos.map(s => ({id: s.id, name: s.name}));
        return {...c, sets: sets};
    }));
    return categoriesWSets;
}

const _getRemoteCategoriesWithSetsWithAnswers = async (categoriesWSets) => {
    const categoriesWSetsWQuestions = await Promise.all(categoriesWSets.map(async (c) => {
        const setsWQuestions = await Promise.all(c.sets.map(async (s) => {
            const response      = await QuestionServerDao.getAllQuestions(c.id, s.id);
            const questionDtos  = response.data;
            const questions     = questionDtos.map(q => ({id: q.id, name: q.name, answers: q.answers, correct_answer: q.correct_answer}));
            return {...s, questions: questions};
        }));
        return {...c, sets: setsWQuestions};
    }));
    return categoriesWSetsWQuestions;
}


const getRemoteCategoriesWithSetsWithAnswers = async () => {
    const remoteCategories                = await getRemoteCategories();
    const remoteCategoriesWSets           = await _getRemoteCategoriesWithSets(remoteCategories);
    const remoteCategoriesWSetsWQuestions = await _getRemoteCategoriesWithSetsWithAnswers(remoteCategoriesWSets);
    return remoteCategoriesWSetsWQuestions;
}


const RemoteService = {
    getRemoteCategories,
    getRemoteCategoriesWithSetsWithAnswers
};

export default RemoteService;