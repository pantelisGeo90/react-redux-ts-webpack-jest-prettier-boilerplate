export interface ProfileModel {
  id: number;
  username: string;
  age: number;
  dob: Date;
}

export interface ProfilePageModel {
  isLoading: boolean;
  isSaving: boolean;
  isSuccess: boolean;
  isDone: boolean;
  errorMessage?: string;
}
