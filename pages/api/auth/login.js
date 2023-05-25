import { User } from "@/models/user";
import { ConnectDB, cookieSetter, generateToken } from "@/utils/features";
import bcrypt from "bcrypt";
const { asyncError, errorHandler } = require("@/middlewares/error");

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST method is allowed");

  const { email, password } = req.body;
  if (!email || !password)
    return errorHandler(res, 400, "Please enter all fields");
  await ConnectDB();

  const user = await User.findOne({ email }).select("+password");
  if (!user) return errorHandler(res, 400, "Invalid email");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return errorHandler(res, 400, "Invalid password");
  const token = generateToken(user._id);
  cookieSetter(res, token, true);

  res.status(200).json({
    success: true,
    message: `Welcome back ${user.name} `,
  });
});

export default handler;
