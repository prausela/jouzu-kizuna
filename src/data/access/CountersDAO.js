import Counters from '../store/counters.json';
import _QuestionsWithPossibleAnswersDAO from './_QuestionsWithPossibleAnswersDAO';

const CountersDAO = _QuestionsWithPossibleAnswersDAO(Counters);

export default CountersDAO;