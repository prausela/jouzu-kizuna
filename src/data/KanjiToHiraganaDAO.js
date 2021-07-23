import KanjiToHiragana from './kanji_to_hiragana.json';

const getQuestions = () => {
    return KanjiToHiragana.map(ans => ans.question) || [];
}

const getPossibleAnswers = (question) => {
    const answerObject = KanjiToHiragana.find(ans => ans.question === question);

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