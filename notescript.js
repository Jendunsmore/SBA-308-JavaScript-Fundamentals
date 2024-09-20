/*

Output should have an array that includes:
id, avg, assignment_id

Create a function:
getLearnerData() w/ parameters: (CourseInfo, AssignmentGroup, [LearnerSubmission]);
*/

// Data:------------
// CourseInfo
// AssignmentGroup
// AssignmentInfo
// LearnerSubmission


// Goal: analyze & transform data so the output is an array of objects containing
// id, avg, assignment_id.
// id: number - ID of the learner the data is collected from.
// avg: number - learners total weighted avg.
// each assignment = ID & value (% scored on assignment)
// submission.score / points_possible
// not yet due, don't include in avg or keyed dict. of scores


//---------- Requirements --------------------------------------------//
// Declare variables properly using let and const where appropriate.
//Use operators to perform calculations on variables and literals.
//Use strings, numbers, and Boolean values cached within variables.
//Use at least two if/else statements to control program flow. Optionally, use at least
//one switch statement.
//Use try/catch statements to manage potential errors in the code, such as incorrectly
//formatted or typed data being fed into your program.
//Utilize at least two different types of loops.
//Utilize at least one loop control keyword such as break or continue.
//Create and/or manipulate arrays and objects.
//Demonstrate the retrieval, manipulation, and removal of items in an array or
//properties in an object.
//Use functions to handle repeated tasks.
//Program outputs processed data as described above. Partial credit will be earned
//depending on the level of adherence to the described behavior.
//Ensure that the program runs without errors (comment out things that do not work,
//and explain your blockers - you can still receive partial credit).
//Commit frequently to the git repository.
//Include a README file that contains a description of your application.


// Code/ syntax notes---
// points_possible
//submitted_at
//due_at
//course_id
//learnerId
//submission
// try/catch
// &&
// .
// el
// el.
// some() ?


// loop through learners submission for scores| if?


// Calculate weighted average
//if (totalPoints > 0) {
//learnerResult.avg = (totalWeightedScore / totalPoints) * 100;
//}

// !== (not equal value/ type)
// => arrow function
// assignmentGroups.forEach(group => {
//if (groupElement.course_id !== CourseInfo.id)


// ! if submission score doesn't exist

// 10% deduction

//if (!result.some(el => el.id === learnerId))
//using some() method, checking if at least element in result array
//passes test. Function takes in element (el) and will return true if
//id property of element is = to learnerId. If any element in array
//passes test, some() method will return true / else - false

//sub.learner_id : learner id that submitted assignment
//sub.assignment_id : id of the assignment learner has submitted
