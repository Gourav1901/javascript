let name = {
  firstName: "Gourav",
  lastName: "Choudhary",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName)
  }
}

name.printFullName();
let name2 = {
  firstName: "kunal",
  lastName: "Parmar",
  
  }

  name.printFullName.call(name2);