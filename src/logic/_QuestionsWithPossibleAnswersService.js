import RandomService from "./RandomService";

const startNewGame = (store) => {
    return {
        questions : store.getQuestions()
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

const getNextQuestion = (store, number_of_answers, gameData) => {
    if(gameData.questions.length <= 0){
        gameData.questions = startNewGame(store).questions;
    }
    const chosenIndex = RandomService.getRandomInt(0, gameData.questions.length);
    const question = gameData.questions[chosenIndex];
    gameData.questions.splice(chosenIndex, 1);
    const answerData = store.getPossibleAnswers(question.id);
    const wrongAnswers = getXDifferentFrom(number_of_answers, answerData.incorrect);
    const correctAnswerPosition = RandomService.getRandomInt(0, number_of_answers);
    return {
        id       : question.id,
        question : question.question,
        answers  : withInPositionX(correctAnswerPosition, answerData.correct, wrongAnswers)
    };
}

const checkIfCorrectAnswer = (store, id, answer) => {
    const answerData = store.getPossibleAnswers(id);
    return answer === answerData.correct;
}

const _QuestionsWithPossibleAnswersService = (store, number_of_answers) => ({
    startNewGame            : ()            => startNewGame(store),
    getNextQuestion         : (questions)   => getNextQuestion(store, number_of_answers, questions),
    checkIfCorrectAnswer    : (id, answer)  => checkIfCorrectAnswer(store, id, answer)
});

export default _QuestionsWithPossibleAnswersService;