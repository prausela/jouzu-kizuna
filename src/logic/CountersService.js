import CountersDAO from "../data/access/CountersDAO";
import _QuestionsWithPossibleAnswersService from "./_QuestionsWithPossibleAnswersService";

const NUMBER_OF_ANSWERS = 4;

const CountersService = _QuestionsWithPossibleAnswersService(CountersDAO, NUMBER_OF_ANSWERS);

export default CountersService;