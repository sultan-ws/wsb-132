const express = require('express');
const { adminPanelRouters, websiteRouters, appRouters } = require('./routes/routes');

const masterRouter = express.Router();

masterRouter.use('/admin-panel', adminPanelRouters);
masterRouter.use('/website', websiteRouters);
masterRouter.use('/app', appRouters);

module.exports = masterRouter;