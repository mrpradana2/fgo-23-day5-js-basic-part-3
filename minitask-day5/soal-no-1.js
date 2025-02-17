// jawaban soal nomor 1
const account = {
  id: 251087,
  username: "rizkipradana_19",
  password: "passwordrahasia567!",
  setPassword: function (newPassword) {
    this.password = newPassword;
    return {
      ...account,
    };
    // return this.password;
  },
};

account.setPassword("Newpassword8464@");

const { username, password } = account;

console.log(username, password);
