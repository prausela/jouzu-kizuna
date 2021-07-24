import KanjiToHiragana from './kanji_to_hiragana.json';

const getQuestions = () => {
    return KanjiToHiragana.map(ans => ({ id: ans.id, question: ans.question })) || [];
}

const getPossibleAnswers = (id) => {
    const answerObject = KanjiToHiragana.find(ans => ans.id === id);

    if(!answerObject || !answerObject.correct_answer){
        return undefined;
    }

    return {
        correct     : answerObject.correct_answer,
        incorrect   : answerObject.other_answers ? answerObject.other_answers : []
    }
}

const KanjiToHiraganaDAO = {
    getQuestions,
    getPossibleAnswers
}

export default KanjiToHiraganaDAO;