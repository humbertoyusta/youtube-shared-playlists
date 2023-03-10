export default function swapElements(
    array: any[],
    index1: number,
    index2: number
) {
    const newArray = [...array];
    newArray[index1] = array[index2];
    newArray[index2] = array[index1];
    return newArray;
}
