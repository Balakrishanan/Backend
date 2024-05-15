import mongoose from "mongoose";
const patientData = new mongoose.Schema({
  patient_id: {
    type: String,
    required: true
  },
  patient_name: {
    type: String,
    required: true
  },
  patient_age: {
    type: String,
    required: true
  },
  patient_address: {
    type: String,
    required: true
  },
  patient_mobileNo: {
    type: String,
    required: true
  },
  patient_disease: {
    type: String,
    required: true
  }
});
//userdetail is the modelname.using these userdetail we can able to create,read,update,delete datas in userdetails collection
const Patient = mongoose.model("patients", patientData);

export default Patient;
