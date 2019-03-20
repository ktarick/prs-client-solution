export class Product{
    id: number; 
    vendorId: number;
    partNumber: string;
    name: string;
    price: number;
    unit: string;
    photopath: string;
    active: boolean;
   
    constructor(
        partNumber: string, name: string, 
        price: number =0, unit: string = "",
        photopath: string = "", active: boolean = false)
        {
            this.id =0;
            this.vendorId =0;
            this.partNumber = partNumber;
            this.name = name;
            this.price = price;
            this.unit = unit;
            this.photopath = photopath;
            this.active = active;

        }
}