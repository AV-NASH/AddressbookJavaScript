const prompt=require('prompt-sync')();
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
        let emailRegex=RegExp('(^[a-zA-Z0-9]{1,})(([+_\\-\\.]{1})([_a-zA-z0-9]{1,}))*([@]{1})([_a-zA-z0-9]{1,})([\\.]{1})([_a-zA-z0-9]{2,})(([\\.]{1})([a-zA-z]{2}))*$');
       
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
let addressbookarray=new Array();
try{
    let choice;
do{
let fname=prompt("Enter first name");
let lname=prompt("Enter last name");
if((addressbookarray.findIndex(p=>((p.first_name+" "+p.last_name)===name)))==-1) console.log("name already exist");
else{
let address=prompt("Enter address");
let city=prompt("Enter city");
let state=prompt("Enter state");
let zip=prompt("enter zip");
let phone=prompt("Enter phone number");
let email=prompt("Enter email");
addressbookarray.push(new Addressbook(fname,lname,address,city,state,zip,phone,email));
console.log("Data successfully added");
}
 choice=prompt("want to enter more\n1. yes\n2. no");
}while(choice==1);

} catch(e){console.error(e);}

let choice=prompt("Enter your operation\n1. Edit\n2. Delete\n3. Number of contacts\n4. Search by city or State\n5. Count by city or state\n6. Sort the addressbook\n7. exit");

switch(choice){
    case 1:{
        let name=prompt("Enter the full name of person to be edited")
      let index= addressbookarray.findIndex(p=>((p.first_name+" "+p.last_name)===name));
      console.log("please enter the new data");

      let fname=prompt("Enter first name");
      let lname=prompt("Enter last name");
      let address=prompt("Enter address");
      let city=prompt("Enter city");
      let state=prompt("Enter state");
      let zip=prompt("enter zip");
      let phone=prompt("Enter phone number");
      let email=prompt("Enter email");
      let newData=new Addressbook(fname,lname,address,city,state,zip,phone,email);
      addressbookarray.splice(index,1,newData);
      console.log("Data successfully modified");
      break;
    }

    case 2:{
        let name=prompt("Enter the full name of person to be edited")
        let index= addressbookarray.findIndex(p=>((p.first_name+" "+p.last_name)===name));
        addressbookarray.splice(index,1);
        console.log("data successfully deleted");
        break;
    }

    case 3:{
        let count=addressbookarray.length;
        console.log("No. of contacts is "+count);
        break;
    }

    case 4:{
        let choice=prompt("want to search by\n1. city\n2. state");
        switch(choice){
            case 1:{
                let city=prompt("enter city");
                let index= addressbookarray.findIndex(p=>((p.city)===city));
                if(index==-1)console.log("no such record found");
                else addressbookarray.filter(p=>p.city===city).forEach(p=>console.log(p.toString()));
                break;
            }

            case 2:{
                let state=prompt("enter state");
                let index= addressbookarray.findIndex(p=>((p.state)===state));
                if(index==-1)console.log("no such record found");
                else addressbookarray.filter(p=>p.state===state).forEach(p=>console.log(p.toString()));
                break;
            }
        }
        break;
      
    }

    case 5:{
        // let count=0;
        // addressbookarray.filter(p=>p.state===state).forEach(p=>count+1)
        let choice=prompt("want to search by\n1. city\n2. state");
        switch(choice){
            case 1:{
                let count=0
                let city=prompt("enter city");
                let index= addressbookarray.findIndex(p=>((p.city)===city));
                if(index==-1)console.log("no such record found");
                else{ 
                    addressbookarray.filter(p=>p.city===city).forEach(p=>count++);
                    console.log("No of contacts is "+count);
                }
                break;
            }

            case 2:{
                let count=0;
                let state=prompt("enter state");
                let index= addressbookarray.findIndex(p=>((p.state)===state));
                if(index==-1)console.log("no such record found");
                else{ 
                    addressbookarray.filter(p=>p.state===state).forEach(p=>count++);
                    console.log("No of contacts is "+count);
                }
                break;
            }
        }
        break;

    }

    case 6:{
        let choice=prompt("want to sort by\n1. name\n2. city\n3. state\n4. zip");
        switch(choice){
            case 1:{ console.log("List sorted by name is");
            addressbookarray.sort(compareByName);
            addressbookarray.forEach(p=>console.log(p.toString()));
            break;
        }

            case 2:{ console.log("List sorted by city is");
            addressbookarray.sort(compareByCity);
            addressbookarray.forEach(p=>console.log(p.toString()));
            break;
        }

        case 3:{ console.log("List sorted by state is");
        addressbookarray.sort(compareByState);
        addressbookarray.forEach(p=>console.log(p.toString()));
        break;
    }

     case 4:{ console.log("List sorted by zip is");
            addressbookarray.sort(compareByZip);
            addressbookarray.forEach(p=>console.log(p.toString()));
            break;
        }

       

    }

    
}
}
function compareByName(contact1,contact2){
    const name1=(contact1.first_name+" "+contact1.last_name).toUpperCase();
    const name2=(contact2.first_name+" "+contact2.last_name).toUpperCase();

    let compare=0
    if(name1>name2) compare=1;
    else { if(name2>name1) compare=-1;}

    return compare;
}

function compareByCity(contact1,contact2){
    const city1=(contact1.city).toUpperCase();
    const city2=(contact2.city).toUpperCase();

    let compare=0
    if(city1>city2) compare=1;
    else { if(city2>city1) compare=-1;}

    return compare;
}

function compareByState(contact1,contact2){
    const state1=(contact1.state).toUpperCase();
    const state2=(contact2.state).toUpperCase();

    let compare=0
    if(state1>state2) compare=1;
    else { if(state2>state1) compare=-1;}

    return compare;
}

function compareByZip(contact1,contact2){
    const zip1=(contact1.zip);
    const zip2=(contact2.zip);

    let compare=0
    if(zip1>zip2) compare=1;
    else { if(zip2>zip1) compare=-1;}

    return compare;
}
