
  export const url = (path) => {
    return process.env.NODE_ENV === "development"
      ? `http://localhost:5000${path}`
      : path;
  }
