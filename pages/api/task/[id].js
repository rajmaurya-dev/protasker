import { asyncError, errorHandler } from "@/middlewares/error";
import { Task } from "@/models/task";
import { User } from "@/models/user";
import { ConnectDB, checkAuth } from "@/utils/features";

const handler = asyncError(async (req, res) => {
  await ConnectDB();
  const user = await checkAuth(req);
  if (!user) return errorHandler(res, 401, "Login first");
  const taskID = req.query.id;

  const task = await Task.findById(taskID);
  if (!task) return errorHandler(res, 404, "Task not found");
  if (req.method === "PUT") {
    task.isCompleted = !task.isCompleted;
    await task.save();
    res.status(200).json({
      success: true,
      message: "Task updated successfully",
    });
  } else if (req.method === "DELETE") {
    await task.deleteOne();
    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } else {
    return errorHandler(res, 400, "this method is not available");
  }
});
export default handler;
