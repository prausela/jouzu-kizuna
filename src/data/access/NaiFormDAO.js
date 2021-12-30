import NaiForm from '../store/nai_form.json';
import _QuestionsWithPossibleAnswersDAO from './_QuestionsWithPossibleAnswersDAO';

const NaiFormDAO = _QuestionsWithPossibleAnswersDAO(NaiForm);

export default NaiFormDAO;