const {authJwt} = require("../middleware");
const controller = require("../controllers/user.controller");
const {Router} = require("express");
const tryCatch = require("../middleware/tryCatch");

const router = Router();

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get(
  "/me",
  [authJwt.verifyToken],
  tryCatch(controller.userMe)
);

module.exports = router;
