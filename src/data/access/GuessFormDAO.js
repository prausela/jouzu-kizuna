import GuessForm from '../store/guess_form.json';
import _QuestionsWithPossibleAnswersDAO from './_QuestionsWithPossibleAnswersDAO';

const GuessFormDAO = _QuestionsWithPossibleAnswersDAO(GuessForm);

export default GuessFormDAO;