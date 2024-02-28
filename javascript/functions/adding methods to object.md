```
const math = {
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  },
};

console.log(math.add(1, 2)); // 3
console.log(math.multiply(1, 2)); // 2
```
```
const auth = {
  username: "ahmet",
  login: () => {
    console.log("login");
  },
  logout() {
    console.log("logout");
  },
};
console.log(auth.username); // ahmet
auth.login(); // login
auth.logout(); // logout
```