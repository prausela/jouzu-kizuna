const getQuestions = (store) => {
    return store.map(ans => ({ id: ans.id, question: ans.question })) || [];
}

const getPossibleAnswers = (store, id) => {
    const answerObject = store.find(ans => ans.id === id);

    if(!answerObject || !answerObject.correct_answer){
        return undefined;
    }

    return {
        correct     : answerObject.correct_answer,
        incorrect   : answerObject.other_answers ? answerObject.other_answers : []
    }
}

const _QuestionsWithPossibleAnswersDAO = (store) => {
    return {
        getQuestions       : () => getQuestions(store),
        getPossibleAnswers : (id) => getPossibleAnswers(store, id)
    }
}

export default _QuestionsWithPossibleAnswersDAO;