import { asyncError, errorHandler } from "@/middlewares/error";
import { Task } from "@/models/task";
import { User } from "@/models/user";
import { ConnectDB, checkAuth } from "@/utils/features";

const handler = asyncError(async (req, res) => {
  if (req.method !== "GET")
    return errorHandler(res, 400, "only GET method is allowed");
  await ConnectDB();
  const user = await checkAuth(req);
  if (!user) return errorHandler(res, 401, "Login first");
  const tasks = await Task.find({ user: user._id });
  res.json({
    sucess: true,
    tasks,
  });
});
export default handler;
