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
    
    public get getUserId() : string {
        return this.userId;
    }

    public get getCreatedDate() : number {
        return this.createdDate;
    }

    public get getName() : string {
        return this.name;
    }

    public get getDescription() : string {
        return this.description;
    }

    public get getStatus() : string {
        return this.status;
    }
    
}
