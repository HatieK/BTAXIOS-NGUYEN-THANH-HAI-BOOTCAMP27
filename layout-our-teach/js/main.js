main();

function main() {
  apiGetUsers().then(function (result) {
    const users = result.data;
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      users[i] = new Users(
        user.id,
        user.account,
        user.name,
        user.password,
        user.email,
        user.type,
        user.language,
        user.describe,
        user.image
      );
    }
    display(users);
  });
}

function display(users) {
  let html = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.type === "GV") {
      html += `
        <div class="col-12 col-sm-6 col-md-3 mb-3" data-id="${user.id}">
        <div class="item rounded-lg overflow-hidden" >
          <img src="./img/${user.image}" class="w-100" alt="" />
          <div class="info">
            <h6>${user.language}</h6>
            <h3>${user.name}</h3>
            <p>
              ${user.describe}
            </p>
          </div>
        </div>
      </div>
        
        
        `;
    }
  }
  console.log(html);
  document.getElementById("slider").innerHTML = html;
}
