export class Request{
    id: number;
    userId: number;
    description: string;
    justification: string;
    rejectionReason: string;
    deliveryMode: string;
    submittedDate: string;
    status: string;
    total: number;
    active: boolean;

    constructor(submittedDate: string)
        {
        this.description = "";
        this.justification = "";
        this.rejectionReason = "";
        this.deliveryMode = "";
        this.submittedDate = (new Date()).toISOString();
        this.status = "New";
        this.total = 0;
        this.active = true;
        }
}