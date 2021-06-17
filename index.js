let students = [];

students[0] = {
    name: "jan",
    surname: "reno",
    age: 26,
    score: {
        javascript: 61,
        react: 57,
        python: 88,
        java: 90
    }
}

students[0].sumPoints = students[0].score.javascript + students[0].score.react + students[0].score.python + students[0].score.java;
students[0].avePoints = students[0].sumPoints / 4;
students[0].frontAve = (students[0].score.javascript + students[0].score.react) / 2;

students[0].janGpa = 0;

if(students[0].score.javascript >= 91) {
    students[0].janGpa += 4 * 4;
} else if(students[0].score.javascript >= 81) {
    students[0].janGpa += 3 * 4;
} else if(students[0].score.javascript >= 71) {
    students[0].janGpa += 2 * 4;
} else if(students[0].score.javascript >= 61) {
    students[0].janGpa += 1 * 4;
} else if(students[0].score.javascript >= 51) {
    students[0].janGpa += 0.5 * 4;
}

if(students[0].score.react >= 91) {
    students[0].janGpa += 4 * 7;
} else if(students[0].score.react >= 81) {
    students[0].janGpa += 3 * 7;
} else if(students[0].score.react >= 71) {
    students[0].janGpa += 2 * 7;
} else if(students[0].score.react >= 61) {
    students[0].janGpa += 1 * 7;
} else if(students[0].score.react >= 51) {
    students[0].janGpa += 0.5 * 7;
}

if(students[0].score.python >= 91) {
    students[0].janGpa += 4 * 6;
} else if(students[0].score.python >= 81) {
    students[0].janGpa += 3 * 6;
} else if(students[0].score.python >= 71) {
    students[0].janGpa += 2 * 6;
} else if(students[0].score.python >= 61) {
    students[0].janGpa += 1 * 6;
} else if(students[0].score.python >= 51) {
    students[0].janGpa += 0.5 * 6;
}

if(students[0].score.java >= 91) {
    students[0].janGpa += 4 * 3;
} else if(students[0].score.java >= 81) {
    students[0].janGpa += 3 * 3;
} else if(students[0].score.java >= 71) {
    students[0].janGpa += 2 * 3;
} else if(students[0].score.java >= 61) {
    students[0].janGpa += 1 * 3;
} else if(students[0].score.java >= 51) {
    students[0].janGpa += 0.5 * 3;
}

students[0].janGpa /= 20;

console.log(students[0]);

students[1] = {
    name: "clode",
    surname: "mone",
    age: 19,
    score: {
        javascript: 77,
        react: 52,
        python: 92,
        java: 67
    }
}

students[1].sumPoints = students[1].score.javascript + students[1].score.react + students[1].score.python + students[1].score.java;
students[1].avePoints = students[1].sumPoints / 4;
students[1].frontAve = (students[1].score.javascript + students[1].score.react) / 2;

students[1].clodeGpa = 0;

if(students[1].score.javascript >= 91) {
    students[1].clodeGpa += 4 * 4;
} else if(students[1].score.javascript >= 81) {
    students[1].clodeGpa += 3 * 4;
} else if(students[1].score.javascript >= 71) {
    students[1].clodeGpa += 2 * 4;
} else if(students[1].score.javascript >= 61) {
    students[1].clodeGpa += 1 * 4;
} else if(students[1].score.javascript >= 51) {
    students[1].clodeGpa += 0.5 * 4;
}

if(students[1].score.react >= 91) {
    students[1].clodeGpa += 4 * 7;
} else if(students[1].score.react >= 81) {
    students[1].clodeGpa += 3 * 7;
} else if(students[1].score.react >= 71) {
    students[1].clodeGpa += 2 * 7;
} else if(students[1].score.react >= 61) {
    students[1].clodeGpa += 1 * 7;
} else if(students[1].score.react >= 51) {
    students[1].clodeGpa += 0.5 * 7;
}

if(students[1].score.python >= 91) {
    students[1].clodeGpa += 4 * 6;
} else if(students[1].score.python >= 81) {
    students[1].clodeGpa += 3 * 6;
} else if(students[1].score.python >= 71) {
    students[1].clodeGpa += 2 * 6;
} else if(students[1].score.python >= 61) {
    students[1].clodeGpa += 1 * 6;
} else if(students[1].score.python >= 51) {
    students[1].clodeGpa += 0.5 * 6;
}

if(students[1].score.java >= 91) {
    students[1].clodeGpa += 4 * 3;
} else if(students[1].score.java >= 81) {
    students[1].clodeGpa += 3 * 3;
} else if(students[1].score.java >= 71) {
    students[1].clodeGpa += 2 * 3;
} else if(students[1].score.java >= 61) {
    students[1].clodeGpa += 1 * 3;
} else if(students[1].score.java >= 51) {
    students[1].clodeGpa += 0.5 * 3;
}

students[1].clodeGpa /= 20;

console.log(students[1]);

students[2] = {
    name: "van",
    surname: "gogh",
    age: 21,
    score: {
        javascript: 51,
        react: 98,
        python: 65,
        java: 70
    }
}

students[2].sumPoints = students[2].score.javascript + students[2].score.react + students[2].score.python + students[2].score.java;
students[2].avePoints = students[2].sumPoints / 4;
students[2].frontAve = (students[2].score.javascript + students[2].score.react) / 2;

students[2].vanGpa = 0;

if(students[2].score.javascript >= 91) {
    students[2].vanGpa += 4 * 4;
} else if(students[2].score.javascript >= 81) {
    students[2].vanGpa += 3 * 4;
} else if(students[2].score.javascript >= 71) {
    students[2].vanGpa += 2 * 4;
} else if(students[2].score.javascript >= 61) {
    students[2].vanGpa += 1 * 4;
} else if(students[2].score.javascript >= 51) {
    students[2].vanGpa += 0.5 * 4;
}

if(students[2].score.react >= 91) {
    students[2].vanGpa += 4 * 7;
} else if(students[2].score.react >= 81) {
    students[2].vanGpa += 3 * 7;
} else if(students[2].score.react >= 71) {
    students[2].vanGpa += 2 * 7;
} else if(students[2].score.react >= 61) {
    students[2].vanGpa += 1 * 7;
} else if(students[2].score.react >= 51) {
    students[2].vanGpa += 0.5 * 7;
}

if(students[2].score.python >= 91) {
    students[2].vanGpa += 4 * 6;
} else if(students[2].score.python >= 81) {
    students[2].vanGpa += 3 * 6;
} else if(students[2].score.python >= 71) {
    students[2].vanGpa += 2 * 6;
} else if(students[2].score.python >= 61) {
    students[2].vanGpa += 1 * 6;
} else if(students[2].score.python >= 51) {
    students[2].vanGpa += 0.5 * 6;
}

if(students[2].score.java >= 91) {
    students[2].vanGpa += 4 * 3;
} else if(students[2].score.java >= 81) {
    students[2].vanGpa += 3 * 3;
} else if(students[2].score.java >= 71) {
    students[2].vanGpa += 2 * 3;
} else if(students[2].score.java >= 61) {
    students[2].vanGpa += 1 * 3;
} else if(students[2].score.java >= 51) {
    students[2].vanGpa += 0.5 * 3;
}

students[2].vanGpa /= 20;

console.log(students[2]);

students[3] = {
    name: "damm",
    surname: "square",
    age: 36,
    score: {
        javascript: 82,
        react: 53,
        python: 80,
        java: 65
    }
}

students[3].sumPoints = students[3].score.javascript + students[3].score.react + students[3].score.python + students[3].score.java;
students[3].avePoints = students[3].sumPoints / 4;
students[3].frontAve = (students[3].score.javascript + students[3].score.react) / 2;

students[3].dammGpa = 0;

if(students[3].score.javascript >= 91) {
    students[3].dammGpa += 4 * 4;
} else if(students[3].score.javascript >= 81) {
    students[3].dammGpa += 3 * 4;
} else if(students[3].score.javascript >= 71) {
    students[3].dammGpa += 2 * 4;
} else if(students[3].score.javascript >= 61) {
    students[3].dammGpa += 1 * 4;
} else if(students[3].score.javascript >= 51) {
    students[3].dammGpa += 0.5 * 4;
}

if(students[3].score.react >= 91) {
    students[3].dammGpa += 4 * 7;
} else if(students[3].score.react >= 81) {
    students[3].dammGpa += 3 * 7;
} else if(students[3].score.react >= 71) {
    students[3].dammGpa += 2 * 7;
} else if(students[3].score.react >= 61) {
    students[3].dammGpa += 1 * 7;
} else if(students[3].score.react >= 51) {
    students[3].dammGpa += 0.5 * 7;
}

if(students[3].score.python >= 91) {
    students[3].dammGpa += 4 * 6;
} else if(students[3].score.python >= 81) {
    students[3].dammGpa += 3 * 6;
} else if(students[3].score.python >= 71) {
    students[3].dammGpa += 2 * 6;
} else if(students[3].score.python >= 61) {
    students[3].dammGpa += 1 * 6;
} else if(students[3].score.python >= 51) {
    students[3].dammGpa += 0.5 * 6;
}

if(students[3].score.java >= 91) {
    students[3].dammGpa += 4 * 3;
} else if(students[3].score.java >= 81) {
    students[3].dammGpa += 3 * 3;
} else if(students[3].score.java >= 71) {
    students[3].dammGpa += 2 * 3;
} else if(students[3].score.java >= 61) {
    students[3].dammGpa += 1 * 3;
} else if(students[3].score.java >= 51) {
    students[3].dammGpa += 0.5 * 3;
}

students[3].dammGpa /= 20;

console.log(students[3]);

// HIGHEST GPA

let highestGpa = students[0].janGpa;
let highestGpaStudent = students[0].name + " " + students[0].surname;

if(students[1].clodeGpa > highestGpa) {
    highestGpa = students[1].clodeGpa;
    highestGpaStudent = students[1].name + " " + students[1].surname;
}
if(students[2].vanGpa > highestGpa) {
    highestGpa = students[2].vanGpa;
    highestGpaStudent = students[2].name + " " + students[2].surname;
}
if(students[3].dammGpa > highestGpa) {
    highestGpa = students[3].dammGpa;
    highestGpaStudent = students[3].name + " " + students[3].surname;
}

console.log(highestGpa + " " + highestGpaStudent + " " + "has the highest GPA");



//THE BEST STUDENT +21 

let bestAdultStudent = students[0].name + " " + students[0].surname;



if(students[1].age > 21 && students[1].avePoints > students[0].avePoints) {
    bestAdultStudent = students[1].name + " " + students[1].surname;
}
if(students[2].age > 21 && students[2].avePoints > students[1].avePoints) {
    bestAdultStudent = students[2].name + " " + students[2].surname;
}
if(students[3].age > 21 && students[3].avePoints > students[2].avePoints) {
    bestAdultStudent = students[3].name + " " + students[3].surname;
}

console.log(bestAdultStudent + " " + "is the best adult student");


// THE BEST FRONT-END STUDENT

let bestFrontStudent = students[0].name + " " + students[0].surname;

if(students[1].frontAve > students[0].frontAve) {
    bestFrontStudent = students[1].name + " " + students[1].surname;
}
if(students[2].frontAve > students[1].frontAve) {
    bestFrontStudent = students[2].name + " " + students[2].surname;
}
if(students[3].frontAve > students[3].frontAve) {
    bestFrontStudent = students[3].name + " " + students[3].surname;
}

console.log(bestFrontStudent + " " + "is the best front-end student");