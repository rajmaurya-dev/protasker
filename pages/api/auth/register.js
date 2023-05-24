import { User } from "@/models/user";
import { ConnectDB, cookieSetter, generateToken } from "@/utils/features";
import { serialize } from "cookie";
const { asyncError, errorHandler } = require("@/middlewares/error");

const handler = asyncError(async (req, res) => {
  const { name, email, password } = req.body;
  if (req.method !== "POST")
    return errorHandler(res, 400, "only POST method is allowed");
  let user = await User.findOne({ email });
  if (!name || !email || !password)
    return errorHandler(res, 400, "Please enter all fields");
  await ConnectDB();
  if (user)
    return errorHandler(res, 400, "User already registered with this email");

  user = await User.create({
    name,
    email,
    password,
  });
  const token = generateToken(user._id);
  cookieSetter(res, token, true);
  res.status(201).json({
    success: true,
    message: "Registered Succesfully",
  });
});
export default handler;
