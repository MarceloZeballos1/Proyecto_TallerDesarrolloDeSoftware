const express = require('express');
const Service = require('../models/Service');
const { checkService } = require('../utils/monitor');

const router = express.Router();

// Registrar un servicio
router.post('/', async (req, res) => {
  const { name, url } = req.body;
  const service = new Service({ name, url, status: "unknown" });
  await service.save();
  res.json(service);
});

// Listar servicios
router.get('/', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

// Monitorear un servicio específico
router.get('/:id/check', async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) return res.status(404).json({ error: 'No encontrado' });

  const status = await checkService(service.url);
  service.status = status;
  service.lastChecked = new Date();
  await service.save();

  res.json(service);
});

module.exports = router;
