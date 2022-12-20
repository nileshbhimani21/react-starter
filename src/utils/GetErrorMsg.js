export const getErrorMsg = (data) => {
    if (data.response) {
      return data.response.message || data.response.message;
    }
    if (data.error) {
      return data.error.errors[0].message;
    }
    return "Login Error.";
  };