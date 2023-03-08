import arraysEqual from "./arraysEqual";

export default function shuffleArray(array: any) {
    let arrayCopy = array.slice();
    while (arraysEqual(array, arrayCopy)) {
        arrayCopy = array.slice();
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    return array;
}