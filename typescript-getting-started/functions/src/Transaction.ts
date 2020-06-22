class Transaction {
    userId: string;
    createdDate: number; // (milisecond timestamp, new Date().getTime())
    name: string;
    description: string;
    status: string;  //(success, pending, failed) - make it an enum if you know how.

    constructor(userId: string, name: string, description: string, status: string) {
        this.userId = userId;
        this.createdDate = new Date().getTime();
        this.name = name;
        this.description = description;
        this.status = status;
    }
}
