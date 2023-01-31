// Grade calculator javascript

$('#btnSend').click(function () {

    // assign inputs from the form to variables 
    var assignments = $('#assignments').val()

    var project = $('#project').val()

    var quizzes = $('#quizzes').val()

    var midterm = $('#midterm').val()

    var final = $('#final').val()

    var intex = $('#intex').val()

    var gradeTotal = ((assignments * 0.5) + (project * 0.1) + (quizzes * 0.1) + (midterm * 0.1) + (final * 0.1) + (intex * 0.1)) / 100

    grade = ''
    if (gradeTotal >= 0.94) {
        grade = "A";
    }
    else if (gradeTotal >= 0.9) {
        grade = "A-"
    }
    else if (gradeTotal >= 0.87) {
        grade = "B+"
    }
    else if (gradeTotal >= 0.84) {
        grade = "B"
    }
    else if (gradeTotal >= 0.80) {
        grade = "B-"
    }
    else if (gradeTotal >= 0.77) {
        grade = "C+"
    }
    else if (gradeTotal >= 0.74) {
        grade = "C"
    }
    else if (gradeTotal >= 0.70) {
        grade = "C-"
    }
    else if (gradeTotal >= 0.64) {
        grade = "D+"
    }
    else if (gradeTotal >= 0.60) {
        grade = "D"
    }
    else if (gradeTotal < 0.60) {
        grade = "E"
    }
    //concatenate grade into an output sentence 
    output = ("Your grade is: " + grade)

    //send grade back to html page
    $('#output').html(output)
});


