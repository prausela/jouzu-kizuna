import CategoryLocalDao from "../data/access/local/CategoryLocalDao";


const updateLocalCategoriesWithSetsWithAnswers = async (categoriesWSetsWQuestions) => {
    const updatedCategories4Pouch = await _adaptIdFieldForPouch(categoriesWSetsWQuestions);
    return (await CategoryLocalDao.updateCategoriesWithDetails(updatedCategories4Pouch));
}

const _adaptIdFieldForPouch = async (docs) => {
    return await Promise.all(docs.map(async doc => {
        const {id, ...fields} = doc;
        return {_id: id, ...fields};
    }));
}

const removeAllLocalCategories = async () => {
    await CategoryLocalDao.deleteAllCategories();
}

const LocalService = {
    updateLocalCategoriesWithSetsWithAnswers,
    removeAllLocalCategories
};

export default LocalService;