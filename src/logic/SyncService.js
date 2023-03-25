import LocalService from "./LocalService";
import RemoteService from "./RemoteService";

const updateLocalDatabase = async () => {
    const updatedDb = await RemoteService.getRemoteCategoriesWithSetsWithAnswers();
    await LocalService.removeAllLocalCategories();
    return (await LocalService.updateLocalCategoriesWithSetsWithAnswers(updatedDb));
}

const SyncService = {
    updateLocalDatabase
};

export default SyncService;