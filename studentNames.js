// Create a function that takes an array of students 
// and returns an array of student names.

function getStudentNames(students) {
    const mapped = students.map(function(item) {
        return item.name;
    })
    return mapped;
}