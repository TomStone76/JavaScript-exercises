// Create a function that takes an array of students and 
// returns an array of their top notes. If student does 
// not have notes then let's assume their top note is equal to 0.

function getStudentTopNotes(students) {
    const notes = students.map(note => {
        Math.max(students.notes);
    })
    return notes;
}