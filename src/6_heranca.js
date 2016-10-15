class Pessoa {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    
    toString(){
        return `
        Name: ${this.name}
        Email: ${this.email}
        Phone: ${this.phone}
        `
    }
}

class Client extends Pessoa{
    constructor(id,name, email, phone){
        super(name,email,phone);
        this.id = id;
    }
    toString(){
        return `
        id: ${this.id}
        ${super.toString()}
        `
    }
}

var client = new Client(1,"Fulano","a@a.com","1234-5678");
console.log(client.toString());
