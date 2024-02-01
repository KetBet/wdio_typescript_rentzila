import axios from "axios";

let accessToken: any = null;
let feedbackList: any;

const data = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};

class ApiHelper {
  async createAccessToken() {
    if (accessToken === null) {
      await axios
        .post(`https://stage.rentzila.com.ua/api/auth/jwt/create/`, {
          email: data.email,
          password: data.password,
        })
        .then(async function (response) {
          const responseBody = await response.data.access;
          accessToken = responseBody;
        });
    }
    return accessToken;
  }

  async getFeedbackList() {
    const userAccessToken = await this.createAccessToken();
    await axios
      .get(`https://stage.rentzila.com.ua/api/backcall/`, {
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
        },
      })
      .then((response) => {
        feedbackList = response.data;
      });
    return feedbackList;
  }
}

export default ApiHelper;
