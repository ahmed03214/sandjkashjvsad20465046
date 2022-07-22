import axios from "axios";
const API = process.env.NEXT_PUBLIC_LOCAL_URL;

const getMainData = async () => {
  const { data: social } = await axios(`${API}/api/get/getSocial`);
  const { data: services } = await axios(`${API}/api/get/getServices`);

  const data = { social, services };

  return data;
};

export default getMainData;
