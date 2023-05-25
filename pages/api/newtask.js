import { asyncError, errorHandler } from "@/middlewares/error";
import { Task } from "@/models/task";
import { User } from "@/models/user";
import { ConnectDB, checkAuth } from "@/utils/features";

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "only POST method is allowed");
  await ConnectDB();
  const { title, description } = req.body;
  if (!title || !description)
    return errorHandler(res, 400, "Please enter all field");
  const user = await checkAuth(req);
  if (!user) return errorHandler(res, 401, "Login First");
  await Task.create({
    title,
    description,
    user: user._id,
  });

  res.json({
    sucess: true,
    message: "Task created successfully",
  });
});
export default handler;
