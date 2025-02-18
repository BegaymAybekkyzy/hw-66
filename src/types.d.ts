export interface IMealForm {
  mealtime: string;
  description: string;
  calories: number;
  date: string;
}
export interface IMealAPI {
  [id: string]: IMealForm;
}

export interface IMealPost extends IMealForm {
  id: string;
}

export interface IMealCalorie {
  id: string;
  calories: number;
}
