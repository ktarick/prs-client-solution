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

    constructor(
        description:string = "", justification:string = "",
        rejectionReason:string = "", deliveryMode: string = "",
        submittedDate: string = "", status: string = "",
        total: number = 0, active: boolean = false
        )
        {
        this.description = description;
        this.justification = justification;
        this.rejectionReason = rejectionReason;
        this.deliveryMode = deliveryMode;
        this.submittedDate = submittedDate;
        this.status = status;
        this.total = total;
        this.active = active;
        }
}