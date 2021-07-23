import KanjiToHiraganaDAO from "../data/KanjiToHiraganaDAO";
import RandomService from "./RandomService";

const NUMBER_OF_ANSWERS = 4;

const startNewGame = () => {
    return {
        questions : KanjiToHiraganaDAO.getQuestions()
    }
}

const getXDifferentFrom = (x, from) => {
    if(from.length < x){
        x = from.length;
    }
    const answer = [];
    const taken = new Set();
    while(taken.size < x){
        const possibleAnswer = from[RandomService.getRandomInt(0, from.length)];
        if(!taken.has(possibleAnswer)){
            answer.push(possibleAnswer)
            taken.add(possibleAnswer);
        }
    }
    return answer;
}

const withInPositionX = (x, what, collection) => {
    const newCollection = [];
    let j = 0;
    for(let i = 0; i < NUMBER_OF_ANSWERS; i++){
        if(i === x){
            newCollection.push(what);
        } else {
            newCollection.push(collection[j]);
            j += 1;
        }
    }
    return newCollection;
}

const getNextQuestion = (questions) => {
    const question = questions[RandomService.getRandomInt(0, questions.length)];
    const answerData = KanjiToHiraganaDAO.getPossibleAnswers(question);
    const wrongAnswers = getXDifferentFrom(NUMBER_OF_ANSWERS, answerData.incorrect);
    const correctAnswerPosition = RandomService.getRandomInt(0, NUMBER_OF_ANSWERS);
    return {
        question,
        answers: withInPositionX(correctAnswerPosition, answerData.correct, wrongAnswers)
    };
}

const KanjiToHiraganaService = {
    startNewGame,
    getNextQuestion
}

export default KanjiToHiraganaService;