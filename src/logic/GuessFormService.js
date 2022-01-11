import GuessFormDAO from "../data/access/GuessFormDAO";
import _QuestionsWithPossibleAnswersService from "./_QuestionsWithPossibleAnswersService";

const NUMBER_OF_ANSWERS = 4;

const GuessFormService = _QuestionsWithPossibleAnswersService(GuessFormDAO, NUMBER_OF_ANSWERS);

export default GuessFormService;