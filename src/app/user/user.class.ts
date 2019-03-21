export class User {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;
    active: boolean;

    constructor(username:string = "", password:string = "", 
                firstname:string = "", lastname:string = "", phone:string = "", 
                email:string = "", isReviewer:boolean = false, isAdmin:boolean = false,
                active:boolean = false)
    {
        this.id = 0;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.isReviewer = isReviewer;
        this.isAdmin = isAdmin;
        this.active = active;
    }
}


