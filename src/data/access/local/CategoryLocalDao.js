import PouchDb from "pouchdb";

const getAllCategories = async () => {
    const db = new PouchDb("questiondb");
    return (await db.allDocs({include_docs: true})).rows.map(doc => doc.doc).sort((a, b) => a.position - b.position);
}

const findCategory = async (id) => {
    const db = new PouchDb("questiondb");
    return await db.get(id);
}

const updateCategoriesWithDetails = async (categories) => {
    const db = new PouchDb("questiondb");
    return (await db.bulkDocs(categories, {force:true})).filter(res => res.ok) > 0;
}

const deleteAllCategories = async () => {
    const db = new PouchDb("questiondb"); 
    await db.destroy();
}

export default {
    getAllCategories,
    findCategory,
    updateCategoriesWithDetails,
    deleteAllCategories
};