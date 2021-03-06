const router=require('express').Router();
const emailRoutes = require('./email.routes');
const newsRoutes = require('./news.routes');
const imageRoutes = require('./image.routes');
const useradminRoutes = require('./useradmin.routes');
const livreRoutes = require('./livre.routes');
const fundingRoutes = require('./funding.routes');
const emailRouter = require('./envoiemail.routes')
const uploadRoutes = require('./upload.routes');

router.use('/news', newsRoutes);
router.use('/emails', emailRoutes);
router.use('/images', imageRoutes);
router.use('/useradmin', useradminRoutes);
router.use('/livres', livreRoutes);
router.use('/fundings', fundingRoutes);
router.use('/envoiemail', emailRouter);
router.use('/upload', uploadRoutes);

module.exports = router;
