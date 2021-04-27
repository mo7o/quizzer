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
