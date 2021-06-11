function printName(obj: { first: string; last?: string }) {
    console.log(obj);
}

printName({first: "Kunal"});
printName({first: "John", last: "Doe"})