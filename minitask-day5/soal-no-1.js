// jawaban soal nomor 1
const account = {
  id: 251087,
  username: "rizkipradana_19",
  password: "passwordrahasia567!",
  setPassword: function (newPassword) {
    this.password = newPassword;
    return this.password;
  },
};

const { username, password } = account;

console.log(username, password);
