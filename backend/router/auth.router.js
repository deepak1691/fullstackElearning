const express=require('express');
const router=express.Router();
const controllers=require("../controllers/auth.controllers");
const {signUpSchema,loginSchema,contactSchema}=require("../validators/auth.validators");
const {validate}=require("../meddileware/validate");
const {authMiddleware}=require("../meddileware/auth-middleware")
// const {contactMiddleware}=require("../meddileware/contact_middleware");
router.route("/").get(controllers.home);
router.route("/signup").post(validate(signUpSchema),controllers.register);
router.route("/login").post(validate(loginSchema),controllers.login);
router.route("/contact").post(validate(contactSchema),controllers.contact);
router.route("/user").get(authMiddleware,controllers.user);
router.route("/services").get(controllers.services);
router.route("/study/:name").get(controllers.studyData);

module.exports=router;