abstract class Department{
    // private id:string;
    // private name:string;
    static fiscalYear:number=2020;
    protected employees:string[]=[];  //accessible from classes that extend it

    constructor(protected readonly id:string,public name:string) {
        // this.id=id
        // this.name=n;
        console.log(Department.fiscalYear)
    }

    static createEmployee(name:string){
        return { name: name };
    }

    abstract describe(this:Department):void

    addEmployee(employee:string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department{

    constructor(id:string,public admins:string[]){
        super(id,"IT");
        this.admins=admins
    }

    describe(){
        console.log("IT Department: ",this.id)
    }
}

class AccountingDepartment extends Department{
    private lastReport:string;
    private static instance:AccountingDepartment;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error("No report found..")
    }

    set mostRecentReport(value:string)
    {
        if(!value)
        {
            throw new Error("please pass in a valid value")
        }
        this.addReport(value);
    }

    static getInstance(){
        if(AccountingDepartment.instance){
            return this.instance;
        }
        this.instance=new AccountingDepartment('D3',[])
        return this.instance;
    }

    describe(){
        console.log("Accounting Department: ",this.id)
    }

    constructor(id:string,private reports:string[]){
        super(id,"Accounting")
        this.lastReport=reports[0];
    }

    addEmployee(name: string) {
        if(name=="Max")
        {
            return;
        }
        this.employees.push(name)
    }

    addReport(text:string){
        this.reports.push(text)
        this.lastReport=text
    }

    printReports(){
        console.log(this.reports)
    }
}

const it=new ITDepartment("D1",["Max"])
console.log(it)
it.describe();

const emp1=Department.createEmployee("Max");
console.log(emp1,Department.fiscalYear)

it.addEmployee("Amit")
it.addEmployee("Abhishek")
it.addEmployee("Neha")
it.addEmployee("Rishika")

it.printEmployeeInformation()

const accounting=new AccountingDepartment('D3',[])
// accounting.mostRecentReport() ==> error
accounting.addReport("Something went wrong...")
accounting.mostRecentReport="It worked!!"

accounting.printReports()
console.log(accounting.mostRecentReport)

accounting.addEmployee("Max")
accounting.addEmployee("Manny")
// accounting.printEmployeeInformation()
accounting.describe()

console.log(AccountingDepartment.getInstance())