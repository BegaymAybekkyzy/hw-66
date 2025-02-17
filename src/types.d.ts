export interface IMealForm {
  mealtime: string;
  description: string;
  kcal: number;
}
export interface IMealAPI {
 [id: string]: IMealForm;
}

export interface IMealPost extends IMealForm {
  id: string;
}
