export interface IMealForm {
  mealtime: string;
  description: string;
  kcal: number;
}
export interface IMealAPI extends IMealForm {
 id: string;
}
