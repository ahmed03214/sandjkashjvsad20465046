import axios from "axios";

const API = process.env.NEXT_PUBLIC_PUBLIC_URL;

const handler = async (req, res) => {
  const { id } = req.query;
  const { data: service } = await axios(`${API}/get-service.php?id=${id}`);

  if (service.code != 200 || service.hidden) {
    return res.status(200).json({ code: 400, message: "service Not Found" });
  }

  res.status(200).json(service);
};

export default handler;
