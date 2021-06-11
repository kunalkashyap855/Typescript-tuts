interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceName: "person",
    data: { name: "Shaun" }
}

const docTwo: Resource<string[]> = {
    uid: 1,
    resourceName: "shoppingList",
    data: ["milk", "bread", "eggs"]
}