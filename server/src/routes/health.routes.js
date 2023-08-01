const controller = require("../controllers/health.controller");
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
  "/ping",
  tryCatch(controller.ping)
);

module.exports = router;
