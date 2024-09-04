let incomes = [62000, 67000, 75000];
let total = 5;

for( let income of incomes) {
    console.log(income);  // incomes' each element pyan ya by income
    total += income;
}

console.log(total);


let fullname = "Dylan is god";

for(const char of fullname){
    console.log(char);    // D y l a n ... d
}




const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris" },
    { name: "Kate", city: "Sidney" }
]

for( const student of students ) {
    console.log(`${student.name} lives in ${student.city}`);
}









