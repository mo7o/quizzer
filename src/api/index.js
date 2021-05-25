import axios from "axios";
const HOST = "https://stormy-dawn-16745.herokuapp.com";

export function login(email, password) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${HOST}/auth/local`,
      data: { identifier: email, password },
    })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
}

export function createTest(payload) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${HOST}/tests`,
      data: { ...payload },
    })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
}

export function getTests(userId) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${HOST}/tests?of_user=${userId}`,
    })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
}

export function createQuestion(payload) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${HOST}/questions`,
      data: { ...payload },
    })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
}

export function updateQuestion(payload) {
  return new Promise((resolve, reject) => {
    axios({
      method: "PUT",
      url: `${HOST}/questions/${payload.id}`,
      data: { ...payload },
    })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
}

export function getQuestions(testId) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${HOST}/questions?of_test=${testId}`,
    })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
}

export function deleteQuestion(id) {
  return new Promise((resolve, reject) => {
    axios({
      method: "DELETE",
      url: `${HOST}/questions/${id}`,
    })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
}

export function getTest(testId) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${HOST}/tests/${testId}`,
    })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
}
