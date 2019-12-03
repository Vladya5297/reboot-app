import * as types from './itemTypes'

export const client = "client";
export const problems = "problems";
export const idea = "idea";
export const advantages = "advantages";
export const model = "model";
export default {
    client: {header: "Кто ваш клиент", type: [types.desires]},
    problems: {header: "Проблемы клиента", type: [types.problems]},
    idea: {header: "В чем суть вашего продукта/сервиса/технологии", type: [types.benefits, types.problemSolvings]},
    advantages: {header: "Ваши конкурентные преимущества", type: [types.advantages]},
    model: {header: "Бизнес-модель", type: []},
}