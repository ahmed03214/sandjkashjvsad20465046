import axios from "axios";
import createFormData from "../../../utils/createFormData";

const API = process.env.NEXT_PUBLIC_PUBLIC_URL;

const handler = async (req, res) => {
  if (req.method === "GET")
    return res.status(200).json({ code: 400, message: "not allowed" });

  const { name, email, topic, message } = req.body;

  if (!name || !email || !topic || !message) {
    return res.status(200).json({ code: 400, message: "not allowed" });
  }

  const formData = createFormData(req.body);

  const { data } = await axios.post(`${API}/contactus.php`, formData);

  res.status(200).json(data);
};

export default handler;
