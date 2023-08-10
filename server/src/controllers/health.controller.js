exports.ping = async (req, res, next) => {
  return res.status(200).send('pong');
};
