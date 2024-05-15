import Patient from "../Models/Patient.js";
import asyncHandler from "express-async-handler";

const addPatient = asyncHandler(async (req, res) => {
  const {
    patient_id,
    patient_name,
    patient_age,
    patient_address,
    patient_mobileNo,
    patient_disease
  } = req.body;
  try {
    const patientdata = new Patient({
      patient_id: patient_id,
      patient_name: patient_name,
      patient_age: patient_age,
      patient_address: patient_address,
      patient_mobileNo: patient_mobileNo,
      patient_disease: patient_disease
    });
    await patientdata.save();
    res.status(201).json({
      message: "Patient Added Successfully"
    });
  } catch (error) {
    console.error("Error creating account:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const getAllPatients = asyncHandler(async (req, res) => {
  const patientData = await Patient.find({});
  res.status(200).send(patientData);
});

const updatePatient = asyncHandler(async (req, res) => {
  const {
    id,
    patient_id,
    patient_name,
    patient_age,
    patient_address,
    patient_mobileNo,
    patient_disease
  } = req.body;
  console.log(req.query);
  await Patient.updateOne(
    { _id: id },
    {
      $set: {
        patient_id: patient_id,
        patient_name: patient_name,
        patient_age: patient_age,
        patient_address: patient_address,
        patient_mobileNo: patient_mobileNo,
        patient_disease: patient_disease
      }
    }
  );
  res.json({ status: 200, message: "Patient Updated Successfully" });
});

const deletePatient = asyncHandler(async (req, res) => {
  const { id } = req.query;
  console.log(req.query);
  await Patient.deleteOne({ _id: id });
  res.json({ status: 200 });
});

export { addPatient, getAllPatients, updatePatient, deletePatient };
