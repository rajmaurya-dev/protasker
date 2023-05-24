import { errorHandler } from "@/middlewares/error";
import { Task } from "@/models/task";
import { User } from "@/models/user";
import { ConnectDB } from "@/utils/features";

const handler = async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "only POST method is allowed");
  const { title, description } = req.body;
  await ConnectDB();
  const user = await User.create({
    name: "Raj",
    email: "rajmauray@example.com",
    password: "123456",
  });
  await Task.create({
    title,
    description,
    user: user._id,
  });

  res.json({
    sucess: true,
  });
};
export default handler;
