import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware";
import { verifyRole } from "../middlewares/rbac.middleware";
import { Role } from "@prisma/client";
import * as patientController from "../controllers/patient.controller";

const router: Router = Router();

// Use the verifyJWT middleware for all routes in this router
router.use(verifyJWT);
router.use(verifyRole([Role.PATIENT]));

// create,edit patient  --Done
// add/remove/edit emergency contact --Done

// medical record router (add/edit/get/(get/key))
// Doctor router (CRUD) | Appointment Slot (CRUD)
// Hospital (CRUD)
// admin router (add hospital)
// appointment router (CRUD)

router.patch("", patientController.updatePatient);

export default router;
