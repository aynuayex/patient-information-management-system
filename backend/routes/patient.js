const app = require("express");
const router = app.Router();

const {
  getPatient,
  getPatients,
  createPatient,
  updatePatient,
  deletePatient
} = require("../controllers/patientController")

router.get("/:id",getPatient)
  
router.get("/",getPatients)
  
router.post('/',createPatient);
router.patch('/:id',updatePatient);
  
router.delete("/:id",deletePatient)

module.exports = router;

