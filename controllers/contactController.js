const Contact = require('../models/Contact');

// @desc    Get all contact requests/tickets
// @route   GET /api/contacts
// @access  Private/Admin
const getContacts = async (req, res) => {
  try {
    const Contact = require('../models/Contact');
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ message: 'Database connection required. Please configure MongoDB Atlas.' });
  }
};

// @desc    Get Dashboard Stats
// @route   GET /api/contacts/stats
// @access  Private/Admin
const getStats = async (req, res) => {
  try {
    const Contact = require('../models/Contact');
    const totalRequests = await Contact.countDocuments();
    const pending = await Contact.countDocuments({ status: 'Pending' });
    const inProgress = await Contact.countDocuments({ status: 'In Progress' });
    const completed = await Contact.countDocuments({ status: 'Completed' });

    res.json({ totalRequests, pending, inProgress, completed });
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ message: 'Database connection required. Please configure MongoDB Atlas.' });
  }
};

// @desc    Create a new contact request
// @route   POST /api/contacts
// @access  Public
const createContact = async (req, res) => {
  try {
    const Contact = require('../models/Contact');
    const { name, email, phone, serviceType, message } = req.body;
    const contact = new Contact({ name, email, phone, serviceType, message });
    const createdContact = await contact.save();
    res.status(201).json(createdContact);
  } catch (error) {
    console.error('Create contact error:', error);
    res.status(500).json({ message: 'Database connection required. Please configure MongoDB Atlas.' });
  }
};

// @desc    Update contact status
// @route   PUT /api/contacts/:id/status
// @access  Private/Admin
const updateContactStatus = async (req, res) => {
  try {
    const Contact = require('../models/Contact');
    const { status } = req.body;
    const contact = await Contact.findById(req.params.id);

    if (contact) {
      if (!['Pending', 'In Progress', 'Completed'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status' });
      }
      contact.status = status;
      const updatedContact = await contact.save();
      res.json(updatedContact);
    } else {
      res.status(404).json({ message: 'Request not found' });
    }
  } catch (error) {
    console.error('Update status error:', error);
    res.status(500).json({ message: 'Database connection required. Please configure MongoDB Atlas.' });
  }
};

// @desc    Delete contact request
// @route   DELETE /api/contacts/:id
// @access  Private/Admin
const deleteContact = async (req, res) => {
  try {
    const Contact = require('../models/Contact');
    const contact = await Contact.findById(req.params.id);

    if (contact) {
      await contact.deleteOne();
      res.json({ message: 'Request removed' });
    } else {
      res.status(404).json({ message: 'Request not found' });
    }
  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({ message: 'Database connection required. Please configure MongoDB Atlas.' });
  }
};

module.exports = {
  getContacts,
  getStats,
  createContact,
  updateContactStatus,
  deleteContact
};
