const router = require("express").Router();
const Controller = require("../controllers/controller");
const authentication = require("../middleware/authentication");

router.post("/register", Controller.registerPage);
router.post("/login", Controller.loginPage);
router.post("/googleLogin", Controller.googleLogin);

router.use(authentication);

router.get("/update/:id", Controller.populateUser);
router.put("/update/:id", Controller.updateUser);
router.delete("/delete/:id", Controller.deleteUser);

router.get("/", Controller.showPost);
// router.post("/waifu", Controller.showWaifu);

module.exports = router;
