import TaFormDAO from "../data/access/TaFormDAO";
import _QuestionsWithPossibleAnswersService from "./_QuestionsWithPossibleAnswersService";

const NUMBER_OF_ANSWERS = 4;

const TaFormService = _QuestionsWithPossibleAnswersService(TaFormDAO, NUMBER_OF_ANSWERS);

export default TaFormService;