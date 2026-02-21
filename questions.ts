
import { Question } from './types';

export const MATH_QUESTIONS: Question[] = [
  {
    id: 1,
    category: "수와 연산",
    type: "multiple-choice",
    question: "100이 4개, 10이 15개, 1이 8개인 수는 얼마입니까?",
    choices: [
      { id: 1, text: "4158" },
      { id: 2, text: "558" },
      { id: 3, text: "458" },
      { id: 4, text: "548" }
    ],
    correctAnswer: "2",
    explanation: "100이 4개면 400, 10이 15개면 150, 1이 8개면 8입니다. 400 + 150 + 8 = 558입니다."
  },
  {
    id: 2,
    category: "수와 연산",
    type: "multiple-choice",
    question: "카드 2, 5, 8, 1이 있습니다. 이 중 3장을 골라 만들 수 있는 가장 큰 세 자리 수는 무엇입니까?",
    choices: [
      { id: 1, text: "852" },
      { id: 2, text: "851" },
      { id: 3, text: "582" },
      { id: 4, text: "825" }
    ],
    correctAnswer: "1",
    explanation: "가장 큰 수부터 백의 자리, 십의 자리, 일의 자리에 놓으면 852가 됩니다."
  },
  {
    id: 3,
    category: "도형",
    type: "multiple-choice",
    question: "다음 중 양쪽으로 끝없이 늘인 곧은 선을 무엇이라고 합니까?",
    choices: [
      { id: 1, text: "선분" },
      { id: 2, text: "반직선" },
      { id: 3, text: "직선" },
      { id: 4, text: "곡선" }
    ],
    correctAnswer: "3",
    explanation: "양쪽으로 끝없이 늘인 곧은 선은 '직선'입니다."
  },
  {
    id: 4,
    category: "도형",
    type: "multiple-choice",
    question: "정사각형의 네 각은 모두 몇 도입니까?",
    choices: [
      { id: 1, text: "60도" },
      { id: 2, text: "90도" },
      { id: 3, text: "180도" },
      { id: 4, text: "45도" }
    ],
    correctAnswer: "2",
    explanation: "정사각형의 네 각은 모두 직각(90도)입니다."
  },
  {
    id: 5,
    category: "도형",
    type: "multiple-choice",
    question: "둘레의 길이가 24cm인 정사각형이 있습니다. 이 정사각형의 한 변의 길이는 몇 cm입니까?",
    choices: [
      { id: 1, text: "4cm" },
      { id: 2, text: "6cm" },
      { id: 3, text: "8cm" },
      { id: 4, text: "12cm" }
    ],
    correctAnswer: "2",
    explanation: "정사각형은 네 변의 길이가 같으므로 24 ÷ 4 = 6cm입니다."
  },
  {
    id: 6,
    category: "수와 연산",
    type: "multiple-choice",
    question: "고등어 2마리를 '한 손'이라고 합니다. 고등어 14마리는 몇 손입니까?",
    choices: [
      { id: 1, text: "6손" },
      { id: 2, text: "7손" },
      { id: 3, text: "8손" },
      { id: 4, text: "28손" }
    ],
    correctAnswer: "2",
    explanation: "14 ÷ 2 = 7이므로 7손입니다."
  },
  {
    id: 7,
    category: "수와 연산",
    type: "multiple-choice",
    question: "민수는 9살이고, 누나는 민수보다 4살 많습니다. 민수와 누나의 나이 합은 몇 살입니까?",
    choices: [
      { id: 1, text: "13살" },
      { id: 2, text: "21살" },
      { id: 3, text: "22살" },
      { id: 4, text: "23살" }
    ],
    correctAnswer: "3",
    explanation: "누나 나이: 9 + 4 = 13살. 합계: 9 + 13 = 22살입니다."
  },
  {
    id: 8,
    category: "수와 연산",
    type: "multiple-choice",
    question: "15 × 4 의 계산 결과는 얼마입니까?",
    choices: [
      { id: 1, text: "40" },
      { id: 2, text: "50" },
      { id: 3, text: "60" },
      { id: 4, text: "70" }
    ],
    correctAnswer: "3",
    explanation: "15를 4번 더하면 15+15+15+15 = 60입니다."
  },
  {
    id: 9,
    category: "측정",
    type: "multiple-choice",
    question: "2km 400m는 몇 m입니까?",
    choices: [
      { id: 1, text: "240m" },
      { id: 2, text: "2040m" },
      { id: 3, text: "2400m" },
      { id: 4, text: "20040m" }
    ],
    correctAnswer: "3",
    explanation: "1km = 1000m이므로 2km = 2000m입니다. 2000 + 400 = 2400m입니다."
  },
  {
    id: 10,
    category: "분수와 소수",
    type: "multiple-choice",
    question: "분수 10분의 7을 소수로 바르게 나타낸 것은 무엇입니까?",
    choices: [
      { id: 1, text: "0.7" },
      { id: 2, text: "7.0" },
      { id: 3, text: "0.07" },
      { id: 4, text: "7.1" }
    ],
    correctAnswer: "1",
    explanation: "10분의 1이 0.1이므로, 10분의 7은 0.7입니다."
  },
  {
    id: 11,
    category: "분수와 소수",
    type: "multiple-choice",
    question: "전체를 똑같이 8로 나눈 것 중 3만큼 색칠했습니다. 이 부분을 분수로 어떻게 나타냅니까?",
    choices: [
      { id: 1, text: "3분의 8" },
      { id: 2, text: "8분의 3" },
      { id: 3, text: "11분의 3" },
      { id: 4, text: "8분의 5" }
    ],
    correctAnswer: "2",
    explanation: "전체 8등분 중 3이므로 3/8(8분의 3)입니다."
  },
  {
    id: 12,
    category: "수와 연산",
    type: "multiple-choice",
    question: "어떤 수에 7을 더해야 할 것을 잘못하여 뺐더니 12가 되었습니다. 바르게 계산하면 얼마입니까?",
    choices: [
      { id: 1, text: "19" },
      { id: 2, text: "24" },
      { id: 3, text: "26" },
      { id: 4, text: "31" }
    ],
    correctAnswer: "3",
    explanation: "어떤 수 - 7 = 12 이므로 어떤 수는 19입니다. 바른 계산은 19 + 7 = 26입니다."
  },
  {
    id: 13,
    category: "수와 연산",
    type: "multiple-choice",
    question: "사과가 한 상자에 24개씩 3상자 있습니다. 사과는 모두 몇 개입니까?",
    choices: [
      { id: 1, text: "62개" },
      { id: 2, text: "72개" },
      { id: 3, text: "82개" },
      { id: 4, text: "92개" }
    ],
    correctAnswer: "2",
    explanation: "24 × 3 = 72입니다."
  },
  {
    id: 14,
    category: "수와 연산",
    type: "multiple-choice",
    question: "45 ÷ 6 의 몫과 나머지는 얼마입니까?",
    choices: [
      { id: 1, text: "몫 7, 나머지 3" },
      { id: 2, text: "몫 6, 나머지 9" },
      { id: 3, text: "몫 8, 나머지 1" },
      { id: 4, text: "몫 7, 나머지 5" }
    ],
    correctAnswer: "1",
    explanation: "6 × 7 = 42이고 45 - 42 = 3이므로 몫은 7, 나머지는 3입니다."
  },
  {
    id: 15,
    category: "수와 연산",
    type: "multiple-choice",
    question: "36 ÷ 4 를 계산하면 나머지가 얼마입니까?",
    choices: [
      { id: 1, text: "0" },
      { id: 2, text: "1" },
      { id: 3, text: "2" },
      { id: 4, text: "4" }
    ],
    correctAnswer: "1",
    explanation: "4 × 9 = 36이므로 나누어떨어집니다. 따라서 나머지는 0입니다."
  },
  {
    id: 16,
    category: "도형",
    type: "multiple-choice",
    question: "원의 중심에서 원 위의 한 점을 이은 선분을 무엇이라고 합니까?",
    choices: [
      { id: 1, text: "지름" },
      { id: 2, text: "반지름" },
      { id: 3, text: "현" },
      { id: 4, text: "중심선" }
    ],
    correctAnswer: "2",
    explanation: "원의 중심과 원 위의 한 점을 이은 선분은 반지름입니다."
  },
  {
    id: 17,
    category: "도형",
    type: "multiple-choice",
    question: "반지름이 5cm인 원의 지름은 몇 cm입니까?",
    choices: [
      { id: 1, text: "5cm" },
      { id: 2, text: "10cm" },
      { id: 3, text: "15cm" },
      { id: 4, text: "20cm" }
    ],
    correctAnswer: "2",
    explanation: "지름은 반지름의 2배이므로 5 × 2 = 10cm입니다."
  },
  {
    id: 18,
    category: "분수와 소수",
    type: "multiple-choice",
    question: "0.4와 0.6 중 어느 것이 더 큽니까?",
    choices: [
      { id: 1, text: "0.4" },
      { id: 2, text: "0.6" },
      { id: 3, text: "같다" },
      { id: 4, text: "알 수 없다" }
    ],
    correctAnswer: "2",
    explanation: "소수 첫째 자리 숫자가 클수록 큰 수입니다. 6이 4보다 크므로 0.6이 더 큽니다."
  },
  {
    id: 19,
    category: "측정",
    type: "multiple-choice",
    question: "오전 10시 30분부터 1시간 20분 동안 공부를 했습니다. 공부가 끝난 시각은?",
    choices: [
      { id: 1, text: "오전 11시 30분" },
      { id: 2, text: "오전 11시 50분" },
      { id: 3, text: "오후 12시 10분" },
      { id: 4, text: "오후 12시 50분" }
    ],
    correctAnswer: "2",
    explanation: "10시 30분 + 1시간 20분 = 11시 50분입니다."
  },
  {
    id: 20,
    category: "분수와 소수",
    type: "multiple-choice",
    question: "사과 12개의 4분의 1은 몇 개입니까?",
    choices: [
      { id: 1, text: "2개" },
      { id: 2, text: "3개" },
      { id: 3, text: "4개" },
      { id: 4, text: "6개" }
    ],
    correctAnswer: "2",
    explanation: "12를 4로 나누면 3이므로, 1/4은 3개입니다."
  }
];
