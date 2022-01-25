import { Router } from "express";
import { AnswerController } from "./controllers/AnswerController";
import { NpsController } from "./controllers/NpsController";
import { SendMailController } from "./controllers/SendMailController";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserControllers";


const router = Router();

const userController = new UserController();
const surveyController = new SurveysController();
const sendMailController = new SendMailController()
const answerController = new AnswerController();
const npsController = new NpsController();

router.post("/users", userController.create);
router.post("/surveys", surveyController.create)

router.get("/surveys", surveyController.show)
router.get("/answers/:value", answerController.execute)
router.get("/nps/:survey_id", npsController.execute)

router.post("/sendMail", sendMailController.excute)


export { router }