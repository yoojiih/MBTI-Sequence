function solution(data, selected) {
    const selectedIndexes = selected
        .map((item) => data.indexOf(item))
        .filter((index) => index !== -1);

    if (selectedIndexes.length > 0) {
        for (let index of selectedIndexes) {
            if (index > 0) {
                [data[index], data[index - 1]] = [data[index - 1], data[index]];
            }
        }
    }
    return data;
}

const data = [1, 2, 3];
const selected = [2];

console.log(solution(data, selected));
