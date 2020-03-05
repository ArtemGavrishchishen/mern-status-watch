const { Router } = require('express');
const config = require('config');

const Watch = require('../models/Watch');
const auth = require('../middleware/auth.middleware');

const router = Router();

//=== get all watches
router.get('/', async (req, res) => {
  try {
    const watches = await Watch.find();

    res.json(watches);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

//=== get watchById
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const watch = await Watch.findOne({ _id: id });

    res.json({ watch });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

//=== update
router.put('/', auth, async (req, res) => {
  try {
    const userId = req.user.userId;
    const Role = config.get('Role');
    const currentUser = await User.findOne({ _id: userId });

    if (currentUser.role !== Role.Admin) {
      return res.status(401).json({ message: 'Access denied' });
    }

    const { watchById } = req.body;

    const updatedwatch = await Watch.findOneAndUpdate(
      { _id: watchById.id },
      { ...watchById },
      { new: true, useFindAndModify: false }
    );

    res.status(201).json({ updatedwatch });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

//=== delete watchById
router.delete('/', auth, async (req, res) => {
  try {
    const { id } = req.body;
    const userId = req.user.userId;
    const Role = config.get('Role');
    const currentUser = await User.findOne({ _id: userId });

    if (currentUser.role !== Role.Admin) {
      return res.status(401).json({ message: 'Access denied' });
    }

    const watch = await Watch.findById(id);
    await watch.remove();
    res.status(200).json(id);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = router;
