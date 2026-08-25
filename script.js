function calculateGrade() {

    let name = document.getElementById("name").value;

    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);
    let mark4 = Number(document.getElementById("mark4").value);
    let mark5 = Number(document.getElementById("mark5").value);
    let mark6 = Number(document.getElementById("mark6").value);

    let total = mark1 + mark2 + mark3 + mark4 + mark5 + mark6;

    let percentage = total / 6;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } 
    else if (percentage >= 80) {
        grade = "A";
    } 
    else if (percentage >= 70) {
        grade = "B";
    } 
    else if (percentage >= 60) {
        grade = "C";
    } 
    else if (percentage >= 50) {
        grade = "D";
    } 
    else {
        grade = "F";
    }

    document.getElementById("result").innerHTML =
        "Student: " + name +
        "<br>Total Marks: " + total +
        "<br>Percentage: " + percentage + "%" +
        "<br>Grade: " + grade;
}
