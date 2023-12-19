fetch("http://localhost:3000/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((users) => {
    console.log("Användardata:", users);
    const mainTitle = document.getElementById("main-title");
    mainTitle.style.textAlign = "center";
    const userList = document.getElementById("user-list");
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.style.backgroundColor = user.color;
      listItem.style.padding = "6px";
      listItem.style.alignContent;
      listItem.style.border = "2px solid #ccf";
      listItem.style.borderRadius = "10px";
      listItem.style.marginBottom = "6px";
      listItem.innerHTML = `
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>${user.username}</p>
      `;
      userList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
