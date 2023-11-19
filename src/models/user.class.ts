export class User {
    id: number;
    cpf: number;
    name: string;
    email: string;
  
    constructor(id: number,cpf: number, name: string, email: string) {
      this.id = id;
      this.cpf = cpf;
      this.name = name;
      this.email = email;
    }
  }
  