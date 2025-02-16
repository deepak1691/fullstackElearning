const express=require('express');
const router=express.Router();
const controllers=require("../controllers/admin.controller");
const {authMiddleware}=require("../meddileware/auth-middleware");
const{adminMiddleware}=require("../meddileware/admin_middleware");

router.route("/users").get(authMiddleware,adminMiddleware,controllers.usersData);
router.route("/contact").get(authMiddleware,adminMiddleware,controllers.userContacts);

router.route("/users/:id").delete(authMiddleware,adminMiddleware,controllers.userIds);
router.route("/contact/:id").delete(authMiddleware,adminMiddleware,controllers.contactDlt);

router.route("/edit/:id").put(authMiddleware,adminMiddleware,controllers.editUser).
get(authMiddleware,adminMiddleware,controllers.editUserFind);

module.exports=router;