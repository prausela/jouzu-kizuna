import CategoryLocalDao from "./CategoryLocalDao";

const getAllSets = async (categoryId) => {
    const categoryWithDetails = await CategoryLocalDao.findCategory(categoryId);
    return categoryWithDetails.sets;
}

const findSet = async (categoryId, id) => {
    const categoryWithDetails = await CategoryLocalDao.findCategory(categoryId);
    return categoryWithDetails.sets.filter(s => s.id == id)[0];
}

export default {
    getAllSets,
    findSet
};