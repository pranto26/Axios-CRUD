// implicit binding
const person = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name);
            console.log(this.age);
        },
    };
};

const sumit = person("Sumit", 38);
const rabbil = person("Rabbil", 30);
sumit.printName();
rabbil.printName();
