let emp={
    eid:101,
    ename:"Rahul",
    loc:"Bangalore"
}
let details={
    email:"rg@gmail.com",
    loc:"USA"
}
let emp_Details={...emp,...details}
console.log(emp_Details)

document.writeln(emp_Details)
document.writeln("<br/>")
document.writeln(JSON.stringify(emp_Details))