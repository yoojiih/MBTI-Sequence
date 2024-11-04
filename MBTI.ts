type Question = {
    disagree: "E" | "S" | "T" | "J";
    agree: "I" | "N" | "F" | "P";
    text: string;
};

const questions: Question[] = [
    {
        disagree: "E",
        agree: "I",
        text: "다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.",
    },
    {
        disagree: "S",
        agree: "N",
        text: "다이어트에 성공한 미래의 내 모습을 상상해보면 동기부여가 된다.",
    },
    {
        disagree: "T",
        agree: "F",
        text: "살쪘다고 고민하는 친구들을 보면 나만 그런 게 아니구나 싶어 위로가 된다.",
    },
    {
        disagree: "J",
        agree: "P",
        text: "다이어트 방법을 고를 때 선택지가 다양한 편이 좋다.",
    },
    {
        disagree: "E",
        agree: "I",
        text: "사람이 붐비는 맛집에 가는 것보다 집에서 배달 음식을 시켜먹는 게 좋다.",
    },
];

const userResponses: number[] = [2, 1, 0, 3, 4];

const scores: Record<string, number> = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
};

// 응답에 따른 점수 계산
userResponses.forEach((response, index) => {
    const question = questions[index];
    switch (response) {
        case 0:
            scores[question.disagree] += 2;
            break;
        case 1:
            scores[question.disagree] += 1;
            break;
        case 2:
            break;
        case 3:
            scores[question.agree] += 1;
        case 4:
            scores[question.agree] += 2;
            break;
    }
});

// MBTI 유형 결정
const mbti: string = [
    scores.E >= scores.I ? "E" : "I",
    scores.S >= scores.N ? "S" : "N",
    scores.T >= scores.F ? "T" : "F",
    scores.J >= scores.P ? "J" : "P",
].join("");

console.log(`당신의 MBTI 유형은: ${mbti}입니다.`);
