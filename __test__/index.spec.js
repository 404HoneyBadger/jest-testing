
const {Job} = require("../Assignments.js")

describe("toEqual Function FML", () => {

  test("getName should return name of job FML", () =>{

  const job1 = new Job("Data Analysis", "Healthcare", false, "data wharehouse", "$40k", true);
  Job.name = "Data Analysis";
  });

  const output = "Data Analysis";

  expect(() => Job.getName(job1, "Data Analysis").toEqual(output));
});

describe("toHaveLength Function FML", () => {

  test("toHaveLength should return length of __", () =>{

  const job2 = new Job("Data Analysis", "Healthcare", false, "data wharehouse", "$40k", true);
  Job.name = "Data Analysis";
  });

  const output = "Data Analysis";

  expect(() => Job.getName(job2, "Data Analysis").toHaveLength(1));
});

describe("toBeTruthy Function FML", () => {

  test("toBeTruthy should return True or False idfk", () =>{

  const job3 = new Job("Data Analysis", "Healthcare", false, "data wharehouse", "$40k", true);
  Job.name = "Data ";
  });

  const output = "";

  expect(() => Job.getName(job3, "Data Analysis").toBeTruthy(output));
});

describe("toHaveBeenCalled Function FML", () => {

  test("toHaveBeenCalled should return name of job FML", () =>{

  const job4 = new Job("Data Analysis", "Healthcare", false, "data wharehouse", "$40k", true);
  Job.name = "Data Analysis";
  });

  const output = "Data Analysis";

  expect(() => Job.getName(job4, "Data Analysis").toHaveBeenCalled());
});

describe("toHaveReturned Function FML", () => {

  test("toHaveReturned should return name of job FML", () =>{

  const job5 = new Job("Data Analysis", "Healthcare", false, "data wharehouse", "$40k", true);
  Job.name = "Data Analysis";
  });

  const output = "Data Analysis";

  expect(() => Job.getName(job5, "Data Analysis").toHaveReturned());
});