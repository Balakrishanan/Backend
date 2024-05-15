import express from "express";
import {
  addPatient,
  deletePatient,
  getAllPatients,
  updatePatient
} from "../Controllers/userController.js";
const router = express.Router();
router.post("/add-patient", addPatient);
router.get("/all-patients", getAllPatients);
router.put("/edit-patient", updatePatient);
router.delete("/delete-patient", deletePatient);
export default router;
