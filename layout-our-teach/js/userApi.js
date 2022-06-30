let baseUrl = "https://62b6eabe6999cce2e80a17ba.mockapi.io/api/userManage";

function apiGetUsers() {
  return axios({
    url: baseUrl,
    method: "GET",
  });
}
