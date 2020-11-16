class Employeepayroll{
   

    constructor(id,name,salary,gender){
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.gender=gender;
    }

    get name() {return this._name;}
    set name(name){this._name=name;}

    get id(){return this._id;}
    set id(id){
        let idregex=RegExp('^[1-9]{1}$');
        if(idregex.test(id))
        this._id=id;
    else throw 'Invalid id';}

    get salary(){return this._salary;}
    set salary(salary){
        let salregex=RegExp('^[1-9]{1,}$');
        if(salregex.test(id))
        this._salary=salary;
    else throw 'Invalid salary';}

    get gender(){return this._gender;}
    set gender(gender){
        let genregex=RegExp('^[MN]{1}$');
        if(genregex.test(id))
        this._gender=gender;
    else throw 'Invalid gender';}

    toString(){ return "id "+this.id+" name "+this.name+" salary "+this.salary;}

    

}
try{
let employeepayroll=new Employeepayroll(1,"avi",34555,'M');
console.log(employeepayroll._name);
console.log(employeepayroll.toString());
} catch(e){console.error(e);}