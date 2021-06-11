// Interfaces
interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = {
    name: "Kunal",
    age: 22,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log(`I spent ${amount}`);
        return amount;
    }
}