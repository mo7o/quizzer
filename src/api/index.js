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
