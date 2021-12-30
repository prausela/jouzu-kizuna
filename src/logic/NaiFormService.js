import NaiFormDAO from "../data/access/NaiFormDAO";
import _QuestionsWithPossibleAnswersService from "./_QuestionsWithPossibleAnswersService";

const NUMBER_OF_ANSWERS = 4;

const NaiFormService = _QuestionsWithPossibleAnswersService(NaiFormDAO, NUMBER_OF_ANSWERS);

export default NaiFormService;