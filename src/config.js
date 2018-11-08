let mode = process.env.NODE_ENV ? process.env.NODE_ENV : "production";

export const APP_CONTAINER_CLASS = "application";
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`;

export const API_SERVER_URI =
  mode === "production"
    ? "http://159.89.143.77/api/"
    : "http://localhost:4200/api/";
export const LOGIN_SERVER_URI =
  mode === "production"
    ? "http://159.89.143.77/signin"
    : "http://localhost:4200/signin";

export const API_GETS = ["beer", "location", "user"];
