class Student {

    constructor(firstName, lastName, age, city, guardian, section) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.city = city;
        this.guardian = guardian;
        this.section = section;
    }
}


const Soorya = new Student("Soorya", "Dev", 18, "Kerala", "Biju", "12c");
const Sonam = new Student("Sonam", "Kapoor", 18, "Kerala", "Kumar", "12c");
const Ali = new Student("Muhammad", "Ali", 17, "Lahore", "Najib", "13k");
const Ajay = new Student("Ajay", "Ram", 19, "Harayana", "Kapoor", "10c");




console.log(Soorya);