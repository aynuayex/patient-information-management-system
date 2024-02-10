
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getPatient =  async (req,res) => {
    try {
      const {id} = req.params
      const patient = await prisma.patient.findUnique({
        where: {
          id
        }
      });
      res.status(200).json(patient);
    } catch (error) {
      res.status(400).json({"msg": "error"});
      
    }
  }

const getPatients =  async (req,res) => {
    try {
      const patients = await prisma.patient.findMany();
      res.status(200).json(patients);
    } catch (error) {
      res.status(400).json({"msg": "error"});  
    }
  }

const createPatient =  async (req, res) => {
    try {
      const {fullName, sex, age, phone, email, doctor, injury} = req.body;
      const patient = await prisma.patient.create({
        data: {
          fullName, sex, age, phone, email, doctor, injury
        }
      });
      res.status(201).json(patient);
      
    } catch (error) {
      res.status(400).json({"msg": "error"})
    }
  }

const updatePatient = async (req, res) => {
    try {
      const {id} = req.params;
      const {fullName, sex, age, phone, email, doctor, injury} = req.body;
      const patient = await prisma.patient.update({
        where: {id},
        data: {
          fullName, sex, age, phone, email, doctor, injury
        }
      });
      res.status(201).json(patient);
      
    } catch (error) {
      res.status(400).json({"msg": "error"})
    }
  }

const deletePatient =  async (req,res) => {
    try {
      const {id} = req.params
      const patient = await prisma.patient.delete({
        where: {id}
      });
      res.status(201).json(patient);
      
    } catch (error) {
      res.status(400).json({"msg": "error"})
      
    }
  }

module.exports = {
    getPatient,
    getPatients,
    createPatient,
    updatePatient,
    deletePatient
}