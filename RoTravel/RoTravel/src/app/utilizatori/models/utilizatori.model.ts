export class User  {
    id: number;
    tipCont:string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cnp: string;
    telefon: string;
    rezervari:[];
    contstructor(){
        this.rezervari=[];
    }
}
