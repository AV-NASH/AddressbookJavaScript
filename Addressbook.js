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

    set first_name(first_name){
        let fnameRegex=RegExp('(^[A-Z]{1})([a-zA-Z]){2,}');
        if(fnameRegex.test(first_name)) this._first_name=first_name;
        else throw 'First Name is incorrect';
    }

    get first_name(){return this._first_name;}

    set last_name(last_name){
        let lnameRegex=RegExp('(^[A-Z]{1})([a-zA-Z]){2,}');
        if(lnameRegex.test(last_name)) this._last_name=last_name;
        else throw 'Last Name is incorrect';
    }
    get last_name(){return this._last_name;}

    set address(address){
        let addressRegex=RegExp('([a-zA-Z0-9]){4,}');
        if(addressRegex.test(address)) this._address=address;
        else throw 'address is incorrect';
    }
    get address(){return this._address;}

    set city(city){
        let cityRegex=RegExp('([a-zA-Z0-9]){4,}');
        if(cityRegex.test(city)) this._city=city;
        else throw 'city is incorrect';
    }
    get city(){return this._city;}

    set state(state){
        let stateRegex=RegExp('([a-zA-Z0-9]){4,}');
        if(stateRegex.test(state)) this._state=state;
        else throw 'state is incorrect';
    }
    get state(){return this._state;}

    
    set zip(zip){
        let zipRegex=RegExp('(^[0-9]{3})([ ]{1})?([0-9]{3})');
        if(zipRegex.test(zip)) this._zip=zip;
        else throw 'zip is incorrect';
    }
    get zip(){return this._zip;}

    set phone(phone){
        let phoneRegex=RegExp('(^[0-9]{2})([ ]{1})([0-9]{10})');
        if(phoneRegex.test(phone)) this._phone=phone;
        else throw 'phone is incorrect';
    }
    get phone(){return this._phone;}

    set email(email){
        let emailRegex=RegExp('(^[a-zA-Z0-9]{1,})(([\\-\\.]{1})([_a-zA-z0-9]{1,}))*([@]{1})([_a-zA-z0-9]{1,})([\\.]{1})([_a-zA-z0-9]{2,})(([\\.]{1})([a-zA-z]{2}))*$');
       
        // let emailRegex=RegExp('(^[_a-zA-z0-9])(([\\-\\.]{1})([_a-zA-z0-9]))*([@]{1})([_a-zA-z0-9])([\\.]{1})([_a-zA-z0-9]{2,})(([\\.]{1})([a-zA-z]{2}))*')
        if(emailRegex.test(email)) this._email=email;
        else throw 'email is incorrect';
    }
    get email(){return this._email;}
    
  
    toString(){
        return this.first_name+" "+this.last_name+" "+this.address+" "+this.city
        +" "+this.state+" "+this.zip+" "+this.phone+" "+this.email;
    }
}
console.log("Welcome to addressbook");
try{
let addressbookdata=new Addressbook("Avi","Nash","hyo street","new mexico city","mexico","343 455","91 8987676212","avsd.xyz@1.com.in");
console.log(addressbookdata.toString());
} catch(e){console.error(e);}
