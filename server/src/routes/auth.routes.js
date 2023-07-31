const { verifySignUp } = require("../validators");
const controller = require("../controllers/auth.controller");
const tryCatch = require("../middleware/tryCatch");
const {Router} = require("express");

const router = Router();

router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post(
  "/signup",
  [
    verifySignUp.checkDuplicateUsernameOrEmail
  ],
  tryCatch(controller.signup)
);

router.post("/signin", tryCatch(controller.signin));
router.post("/refreshtoken", tryCatch(controller.refreshToken));
module.exports = router;
