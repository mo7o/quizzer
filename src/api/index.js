import axios from "axios";

export function login(email, password) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `/auth/local`,
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
      url: `/tests`,
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
      url: `/tests?of_user=${userId}`,
    })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
}

export function createQuestion(payload) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `/questions`,
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
      url: `/questions/${payload.id}`,
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
      url: `/questions?of_test=${testId}`,
    })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
}

export function deleteQuestion(id) {
  return new Promise((resolve, reject) => {
    axios({
      method: "DELETE",
      url: `/questions/${id}`,
    })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
}
