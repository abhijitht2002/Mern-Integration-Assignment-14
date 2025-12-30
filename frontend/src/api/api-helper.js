import axios from "axios";
const baseUrl = "http://localhost:3000/api";

// get the token from local storage
const getToken = () => localStorage.getItem("token");

// register user
const registerUser = async (username, password, role) => {
  try {
    const res = await axios.post(`${baseUrl}/auth/register`, {
      username,
      password,
      role,
    });
    return res.data;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error);
    throw error;
  }
};

// login user
const loginUser = async (username, password) => {
  try {
    const res = await axios.post(`${baseUrl}/auth/login`, {
      username,
      password,
    });
    // Save token in localStorage
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("name", res.data.name);
    return res.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error);
    throw error;
  }
};

// get all customers
const getAllCustomers = async () => {
  try {
    const res = await axios.get(`${baseUrl}/customers`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return res.data;
  } catch (error) {
    console.error("error:", error.response?.data || error);
    throw error;
  }
};

// export functions
export { getToken, registerUser, loginUser, getAllCustomers };
