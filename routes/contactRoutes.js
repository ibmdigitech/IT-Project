const express = require('express');
const router = express.Router();
const {
  getContacts,
  getStats,
  createContact,
  updateContactStatus,
  deleteContact
} = require('../controllers/contactController');
const { protect } = require('../middleware/auth');

router.route('/')
  .get(protect, getContacts)
  .post(createContact);

router.route('/stats').get(protect, getStats);

router.route('/:id/status').put(protect, updateContactStatus);
router.route('/:id').delete(protect, deleteContact);

module.exports = router;
