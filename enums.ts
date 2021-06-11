enum ResourceType { BOOK, FILM, AUTHOR, DIRECTOR, PERSON };

interface Resource<T> {
    uid: number;
    resourceType: number;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: 1,  // Will translate to FILM
    data: { name: "Shaun" }
}

const docTwo: Resource<string[]> = {
    uid: 1,
    resourceType: ResourceType.PERSON,  // Will translate to 4
    data: ["milk", "bread", "eggs"]
}