export class User {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : ''
        this.street = obj ? obj.street : ''
        this.zipCode = obj ? obj.zipCode : ''
        this.city = obj ? obj.city : ''
    }

    public toJson() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city
        }
    }
}