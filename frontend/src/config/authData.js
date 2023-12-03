export const loggedInData = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : {};
