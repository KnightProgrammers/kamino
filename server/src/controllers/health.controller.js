exports.ping = async (req, res) => {
  return res.status(200).send('pong');
};
