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

// sign in
const signInUser = async (formdata) => {
  try {
    const res = await axios.post(`${baseUrl}/auth/login`, formdata);
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

// add customer
const addCustomer = async (formData) => {
  const payload = {
    name: formData.name,
    contact_info: `${formData.phone}, ${formData.email}`,
    status: formData.status,
  };

  try {
    const res = await axios.post(`${baseUrl}/customers`, payload, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return res.data;
  } catch (error) {
    console.error("error:", error.response?.data || error);
    throw error;
  }
};

// delete customer
const deleteCustomer = async (id) => {
  try {
    const res = await axios.delete(`${baseUrl}/customers/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return res.data;
  } catch (error) {
    console.error("error:", error.response?.data || error);
    throw error;
  }
};

// export functions
export { getToken, registerUser, signInUser, getAllCustomers, addCustomer, deleteCustomer };
