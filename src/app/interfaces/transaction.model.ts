export interface Transaction {
    _id?: string;
    name?: string;
    amount?: string;
    date?: string;
    category?: string;
    user?: string;
}

export interface CreateTransactionResp {
    message?: string;
    transaction?: {
        _id?: string;
        name?: string;
        amount?: string;
        data?: string;
        category?: string;
        userId?: string;
    }
}

export interface DeleteTransactionResp {
    message?: string;
}

export interface TransactionState {
    transactions?: Array<Transaction>;
    loading?: boolean;
    error?: Error;
}

export interface TransactionsByCategoryBody {
    category?: string;
    userId?: string;
}