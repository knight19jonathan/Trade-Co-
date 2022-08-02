const router = require('express').Router();
const apiRoutes = require('./api');

router.get('/', (req, res) => {
  res.send('Avast ye scurvy dog!');
});

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Hello There!</h1>")
});

module.exports = router;