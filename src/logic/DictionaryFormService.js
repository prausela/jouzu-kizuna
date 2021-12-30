import DictionaryFormDAO from "../data/access/DictionaryFormDAO";
import _QuestionsWithPossibleAnswersService from "./_QuestionsWithPossibleAnswersService";

const NUMBER_OF_ANSWERS = 4;

const DictionaryFormService = _QuestionsWithPossibleAnswersService(DictionaryFormDAO, NUMBER_OF_ANSWERS);

export default DictionaryFormService;