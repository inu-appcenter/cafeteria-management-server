import SequelizeCRUDRepository from "./base/SequelizeCRUDRepository";
import TransactionHistory from "../entities/TransactionHistory";
import TransactionHistoryModel from "../db/models/TransactionHistoryModel";

class TransactionHistoryRepository extends SequelizeCRUDRepository<TransactionHistory, TransactionHistoryModel> {

    constructor() {
        super(TransactionHistory, TransactionHistoryModel);
    }

    async getAllHistories() {
        return await this.readRecent(50);
    }
}

const transactionHistoryRepository = new TransactionHistoryRepository();

export default transactionHistoryRepository
