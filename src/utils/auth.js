export const isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

export const login = (id, password) => {
  console.log("asdf" + import.meta.env.VITE_ID, import.meta.env.VITE_PW);
  if (
    id === `${import.meta.env.VITE_ID}` &&
    password === `${import.meta.env.VITE_PW}`
  ) {
    localStorage.setItem("isLoggedIn", "true");
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("isLoggedIn");
};
