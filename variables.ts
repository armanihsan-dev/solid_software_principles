interface User {
  name: String;
  age: Number;
}

function userDetails({ name, age }: User): User {
  console.log(name, age);

  return {
    name,
    age,
  };
}

console.log(userDetails({ name: 'arman', age: 21 }));
