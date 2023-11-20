export class Author {
    id: number;
    cpf: number;
    name: string;
    stage_name: string;
  
    constructor(id: number, cpf: number, name: string, stage_name: string) {
      this.id = id;
      this.cpf = cpf;
      this.name = name;
      this.stage_name = stage_name;
    }
  }
  