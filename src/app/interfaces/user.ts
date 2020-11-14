export interface SignUp {
  message?: string;
  userId?: string;
  email?: string;
}

export interface Login {
  message?: string;
  token?: string;
  userId: string;
}

export interface ValidToken {
  message?: string;
  userId?: string;
  status?: number;
}
