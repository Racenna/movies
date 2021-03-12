export type RequestTokenResponse = {
  success: boolean,
  expires_at: string,
  request_token: string,
};

export type CreateSessionResponse = {
  success: boolean,
  session_id: string,
};

export type DeleteSessionResponse = {
  success: boolean,
};
