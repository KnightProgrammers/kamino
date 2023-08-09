const { verifySignUp } = require("../validators");
const controller = require("../controllers/auth.controller");
const tryCatch = require("../middleware/tryCatch");
const {Router} = require("express");
const AuthValidator = require("../validators/auth.validators");

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
    AuthValidator.signupValidator,
    verifySignUp.checkDuplicateEmail,
  ],
  tryCatch(controller.signup)
);

router.post("/signin",
  [
    AuthValidator.loginValidator
  ],
  tryCatch(controller.signin));
router.post("/refreshtoken",
  [
    AuthValidator.refreshTokenValidator
  ],
  tryCatch(controller.refreshToken));
module.exports = router;
