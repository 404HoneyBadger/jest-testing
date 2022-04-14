//Prototypical Assignment

// function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.favoriteColor = favoriteColor;
//     this.favoriteNumber = favoriteNumber;
//     this.favoriteFoods = favoriteFoods;
//     this.family = [];
// };
// //prototype is like appending to the instance
// Person.prototype = {
// fullname: function() {
//     return `${this.firstName} ${this.lastName}`;
// },
// toString: function(){
//     return `${this.fullname()}, ${this.favoriteColor}, ${this.favoriteNumber}`
// }
// },

// 3. Overwrite the toString method from the Object prototype by creating a toString method for Person. The toString method should return a string in the following format:  


// 5
// Person.prototype.family = [];
// Person.prototype.addToFamily = function(Fam) {
//     if (Fam instanceof Person && !this.family.includes(Fam)){
//         this.family.push(Fam);
//     }else{
//         console.log("No Dopplegangers Allowed!")
//     }
//     return `${this.family.length} ${this.family}`
// };

// //Instances
// let Natalee = new Person("Natalee", "Nieves","Black", 999 , ["Free", "Seasoned"])

// let peter = new Person("Peter", "Oleary", "Green", 42, ["pasta", "pizza"]);


// // console.log(peter.toString());
// peter.addToFamily(Natalee);
// console.log(peter.addToFamily(Natalee));
// console.log(peter.family)
// Natalee.addToFamily(peter);
// console.log(Natalee.addToFamily(peter));
// console.log(Natalee.family)
// console.log(Natalee.toString())




// Class Assignment (Ha!)

class Job {
    constructor(name, industry, requiresDegree, field, pay, certifications) {
        this.name = name;
        this.industry = industry;
        this.requiresDegree = requiresDegree;
        this. field = field;
        this.pay = pay;
        this.certifications = certifications;
    }
    getName() {
        return `Job title for this positon is ${this.name}.`

    }
    getFieldAndIndustry() {
        return `You will be working in the ${this.field} field, under the ${this.industry} industry.`

    }
    getPay() {
        return `Compentsation for this postion is ${this.pay} a year.`

    }
    getCertifications() {
        return `Additional certifications ${this.certifications ? 'are' : 'are not'} required.`
    }
}    

//Class Extend

class Prospects extends Job {
    constructor(name, industry, requiresDegree, field, pay, certifications, specialties, jobSatisfaction, workFromHome) {
    super(name, industry, requiresDegree, field,  pay, certifications);
        this.specialties = specialties;
        this. jobSatisfaction = jobSatisfaction;
        this.workFromHome = workFromHome;
    }
    getSpecialities() {
        return `Specialties for this job include ${this.specialties}.`
    }
    getjobSatisfaction() {
        return`Based on blah blah research, overall job satisfaction for this position is ${this.jobSatisfaction ? 'high': 'low'}`
    }
    getworkFromHome() {
        return`Remote options ${this.workFromHome ? "are" : "are not"}available for the ${this.specialties} specialty.`
    }
}

// 3 different instances of the Job class

const job1 = new Job("Data Analysis", "Healthcare", false, "data wharehouse", "$40k", true);
Job.name = "Data Analysis";

const job2 = new Job("Data Scientist", "Healthcare", true, "machine learning", "$50k", false);
Job.name = "Data Scientist";

const job3 = new Job("Project Manager", "Healthcare", false, "fundraising", "$55k", true);
Job.name = "Project Manager";


//console log any 2 methods for each instance of the class

console.log(job1.getName())
console.log(job1.getPay())

console.log(job3.getFieldAndIndustry())
console.log(job3.getCertifications())


//create an instance of the extended class

const detailJob = new Prospects ("Data Analysis", "Healthcare", false, "data wharehouse", "$40k", true, "Market Research", false, true);

const detailJob2 = new Prospects ("Project Manager", "Healthcare", false, "App Design", "$40k", true, "Product Managment", true, true)

//console log 2 new methods from the extended class

console.log(detailJob.getworkFromHome())
console.log(detailJob2.getjobSatisfaction())

module.exports = {Job}
