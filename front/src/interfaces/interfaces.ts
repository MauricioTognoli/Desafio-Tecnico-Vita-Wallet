interface IUser {
  id: number;
  username: string;
  email: string;
  fullName: string;
  avatar: string;
  isPublic: boolean;
}

interface IAuthState {
  token: string | null;
  user: IUser | null;
}

interface IAuthContextProps {
  authState: IAuthState;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

export type { IUser, IAuthState, IAuthContextProps };
