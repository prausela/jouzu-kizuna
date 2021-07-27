import TeFormDAO from "../data/access/TeFormDAO";
import _QuestionsWithPossibleAnswersService from "./_QuestionsWithPossibleAnswersService";

const NUMBER_OF_ANSWERS = 4;

const TeFormService = _QuestionsWithPossibleAnswersService(TeFormDAO, NUMBER_OF_ANSWERS);

export default TeFormService;