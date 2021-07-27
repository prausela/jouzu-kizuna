import _QuestionsWithPossibleAnswersService from "./_QuestionsWithPossibleAnswersService";
import KanjiToHiraganaDAO from "../data/access/KanjiToHiraganaDAO";

const NUMBER_OF_ANSWERS = 4;

const KanjiToHiraganaService = _QuestionsWithPossibleAnswersService(KanjiToHiraganaDAO, NUMBER_OF_ANSWERS);

export default KanjiToHiraganaService;