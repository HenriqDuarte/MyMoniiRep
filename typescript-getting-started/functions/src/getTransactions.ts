class Transaction {
    userId: string;
    createdDate: number; 
    name: string;
    description: string;
    status: string;  

    constructor(userId: string, name: string, description: string) {
        this.userId = userId;
        this.createdDate = new Date().getTime();
        this.name = name;
        this.description = description;
        this.status = Status.Sucess.toString();   
    }
}

enum Status{
    Sucess,
    Pending,
    Failed
}

let transaction_01 = new Transaction("001", "1_transaction", "1st_Description");
let transaction_02 = new Transaction("002", "2_transaction", "2nd_Description");
let transaction_03 = new Transaction("003", "3_transaction", "3rd_Description");
let transaction_04 = new Transaction("004", "4_transaction", "4th_Description");
let transaction_05 = new Transaction("001", "5_transaction", "5th_Description");
let transaction_06 = new Transaction("001", "6_transaction", "6th_Description");
let transaction_07 = new Transaction("002", "7_transaction", "7th_Description");
let transaction_08 = new Transaction("003", "8_transaction", "8th_Description");
let transaction_09 = new Transaction("004", "9_transaction", "9th_Description");
let transaction_10 = new Transaction("001", "10_transaction", "10th_Description");

let alltransactions: Array<Transaction> = [transaction_01, transaction_02, 
                                           transaction_03, transaction_04,
                                           transaction_05, transaction_06, 
                                           transaction_07, transaction_08,
                                           transaction_09, transaction_10     
                                        ]; 

function getTransactions(userId: string, fromDate: number, toDate: number) :string {  
    
    console.log(alltransactions.filter(Transaction => Transaction.userId == userId
            && Transaction.createdDate >= fromDate 
            && Transaction.createdDate <= toDate));
        
    return  alltransactions.filter(Transaction => Transaction.userId == userId
            && Transaction.createdDate >= fromDate 
            && Transaction.createdDate <= toDate).toString();
}

//***********************************
//Testing Function: getTransactions()
//***********************************

let currentTime = new Date().getTime();

//getTransactions("001", 0, currentTime);
//getTransactions("002", 0, 99999999999999);
//getTransactions("003", 9999999999999, 99999999999999);
//getTransactions("001", currentTime, 99999999999999);