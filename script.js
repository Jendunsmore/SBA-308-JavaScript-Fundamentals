// Goal: analyze & transform data so the output is an array of objects containing
// id, avg, assignment_id.
// id: number - ID of the learner the data is collected from.
// avg: number - learners total weighted avg.
// each assignment = ID & value (% scored on assignment)
// submission.score / points_possible
// not yet due, don't include in avg or keyed dict. of scores

// "id"
// "avg"
// <assignment_id>
// points_possible
// submission.score
// course_id
// group_weight
// due_at
// learner_id
// submitted_at


//--------------------------------------//
// ------------ Provided Info-----------//

// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
        {
            id: 125,
            avg: 0.985, // (47 + 150) / (50 + 150)
            1: 0.94, // 47 / 50
            2: 1.0 // 150 / 150
        },
        {
            id: 132,
            avg: 0.82, // (39 + 125) / (50 + 150)
            1: 0.78, // 39 / 50
            2: 0.833 // late: (140 - 15) / 150
        }
    ];

    return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

//---------------------------------------------------------------------//

function getLearnerData(course, ag, submissions) {  //function, takes 3 parameters
    let result = [];  //result array

    try {
        if (course.id !== ag.course_id) { //checks course id equal to course_id belonging to assignmentGroup
            throw 'Input invalid'; // if not equal, error message is thrown
        }

        function addOrUpdateLearner(learnerId, assignmentId, score) { //function adds/updates learner info
            if (!result.some(el => el.id === learnerId)) {  //check if learner is in result
                let student = { id: learnerId };  //creates new learner object id
                student[assignmentId] = score;  //assignment score & learner
                result.push(student);  //new learner object added to result
            } else {
                result.forEach((s) => {  //update assignment score if learner exists
                    if (s.id === learnerId) {
                        s[assignmentId] = score;  //update existing learner with new score
                    }
                });
            }
        }

    for (let sub of submissions) {  //loop through each submission | loop variable= sub
        console.log(sub);  //for each submission, log to console

        const hasSubmissionScore = sub.submission && sub.submission.score;
        if (!hasSubmissionScore) {  //check if submission has a score
            continue;  //if no score found, go to next submission
        }
        let score = sub.submission.score;  //submission score and late submissions
        const dueDate = new Date(sub.due_at); //due date to Date object
        const submittedAt = new Date(sub.submission.submitted_at); //submitted_at converts to date object

        if (submittedAt > dueDate) {  //deduct 10% from score for late work
            score = score * 0.9; //? totals penalty for a late submission
        }

        addOrUpdateLearner(sub.learner_id, sub.assignment_id, score);  //? update/ add learner data
    }
} catch (err) {  //catch errors/ block
    console.error(err);
}

return result;
}
