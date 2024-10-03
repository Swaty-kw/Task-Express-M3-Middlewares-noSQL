const notfoundHandler = async (req, res, next, err) => {};
try {
  return await res.status(404).json({ msg: "request not found" });
} catch (error) {}
model.exports(notfoundHandler);
