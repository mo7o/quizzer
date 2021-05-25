export const calculateScore = (userAns, questions) => {
  console.log(userAns, questions);
  let correctCount = 0;

  for (let index = 0; index < questions.length; index++) {
    if (userAns[index] === questions[index].answer) {
      correctCount = correctCount + 1;
    }
  }

  return { correctCount, totalCount: questions.length };
};
