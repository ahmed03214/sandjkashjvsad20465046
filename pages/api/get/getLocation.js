import axios from "axios";

const API = process.env.NEXT_PUBLIC_PUBLIC_URL;

const handler = async (req, res) => {
  const { data: location } = await axios(`${API}/get-location.php`);

  res.status(200).json(location.data);
};

export default handler;
