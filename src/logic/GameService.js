import QuestionLocalDao from "../data/access/local/QuestionLocalDao";
import RandomService from "./RandomService";

const startNewGame = async (categoryId, setId) => {
    return {
        questions : await QuestionLocalDao.getAllQuestions(categoryId, setId)
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
    const newCollectionLength = collection.length + 1;
    let j = 0;
    for(let i = 0; i < newCollectionLength; i++){
        if(i === x){
            newCollection.push(what);
        } else {
            newCollection.push(collection[j]);
            j += 1;
        }
    }
    return newCollection;
}

const getNextQuestion = async (categoryId, setId, number_of_answers, gameData) => {
    if(gameData.questions.length <= 0){
        gameData.questions = (await startNewGame(categoryId, setId)).questions;
    }
    const chosenIndex = RandomService.getRandomInt(0, gameData.questions.length);
    const question = gameData.questions[chosenIndex];
    gameData.questions.splice(chosenIndex, 1);
    const wrongAnswers = getXDifferentFrom(Math.min(question.answers.length+1, number_of_answers), question.answers);
    const correctAnswerPosition = RandomService.getRandomInt(0, number_of_answers);
    return {
        id       : question.id,
        question : question.name,
        answers  : withInPositionX(correctAnswerPosition, question.correct_answer, wrongAnswers)
    };
}

const checkIfCorrectAnswer = async (categoryId, setId, id, answer) => {
    const answerData = await QuestionLocalDao.findQuestion(categoryId, setId, id);
    return answer === answerData.correct_answer.name;
}

const GameService = {
    startNewGame            : (categoryId, setId)                                   => startNewGame(categoryId, setId),
    getNextQuestion         : (categoryId, setId, number_of_answers, questions)     => getNextQuestion(categoryId, setId, number_of_answers, questions),
    checkIfCorrectAnswer    : (categoryId, setId, id, answer)                       => checkIfCorrectAnswer(categoryId, setId, id, answer)
};

export default GameService;