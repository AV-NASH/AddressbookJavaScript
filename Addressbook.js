class Addressbook{
    constructor(...param) {
        this.first_name=param[0];
        this.last_name=param[1];
        this.address=param[2];
        this.city=param[3];
        this.state=param[4];
        this.zip=param[5];
        this.phone=param[6];
        this.email=param[7];
    }

    toString(){
        return this.first_name+" "+this.last_name+" "+this.address+" "+this.city
        +" "+this.state+" "+this.zip+" "+this.phone+" "+this.email;
    }
}
console.log("Welcome to addressbook");

let addressbookdata=new Addressbook("Avi","Nash","hyo street","new mexico city","mexico",123456,9898767621,"av1@list.com");
console.log(addressbookdata.toString());
