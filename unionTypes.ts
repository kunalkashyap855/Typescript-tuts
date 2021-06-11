function printId(id: string | number) {
    console.log(`Your id is ${id}`);
}

// OK
printId(7);

// OK
printId("ES_kunalk");

// Error
printId({ myId: 2232 });

// For a Union Type, you can only use methods that are available for all the types defines in the union
function printId2(id: string | number) {
    console.log(id.toUpperCase());
}