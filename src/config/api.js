import axios from 'axios';


export const fetchData = async (endpoint) => {
  const { data } = await axios.get(endpoint);
  return data;
};

export const createData = async (endpoint, params) => {
  const { data } = await axios.post(endpoint, params);
  return data;
};

export const updateData = async (endpoint, id, params) => {
  const { data } = await axios.put(`/${endpoint}/${id}`, params);
  return data;
};

export const deleteData = async (endpoint) => {
  const { data } = await axios.delete(endpoint);
  return data;
};
