const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const {toLocal, toServer} =  require('../swapKeys');

const baseUrl = '/connect/index.cfm/app_checklist/app_checklistAdmin';

const requestFail = { SUCCESS: false, ERRORS: ['Something bad'] };
const requestSuccess = { SUCCESS: true, ERRORS: [] };

const requestResult = (percentSuccess = 100) => {
  let result = requestSuccess;
  Math.floor(Math.random() * 100) >= percentSuccess
    ? result = requestFail
    : result = requestSuccess;
  return result;
};


const {
  checklistInstances,
  getInstanceItems,
  saveChecklistInstanceTitle,
  getItemsThatYouCanAdd,
  saveInstance,
  updateChecklistActiveStatus
} = require('./data');

/* GET home page. */
router.get('/', function (req, res) {
  res.send('hello, world');
});

router.get(`${baseUrl}/getChecklistInstances`, (req, res, next) => {
  console.log('getChecklistInstances');
  const status = requestResult();
  const result = { ...status, ...checklistInstances };

  try {
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify(result));
  } catch (error) {
    console.log('error', error);
  }
});

router.post(`${baseUrl}/getInstanceItems`, (req, res, next) => {
  const status = requestResult();
  const result = { ...status, ...getInstanceItems };
  try {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
  } catch (error) {
    next(createError(501));
  }
});

router.post(`${baseUrl}/saveChecklistInstanceTitle`, (req, res, next) => {
  const status = requestResult(50);
  const result = { ...status, ...saveChecklistInstanceTitle };
  try {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
  } catch (error) {
    next(createError(501));
  }
});


router.post(`${baseUrl}/getItemsThatYouCanAdd`, (req, res, next) => {
    const status = requestResult(90);
    const result = { ...status, ...getItemsThatYouCanAdd}

    try {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result));
    } catch (error) {
        next(createError(501));
    }
});

router.post(`${baseUrl}/saveInstance`, (req, res, next) => {
    const status = requestResult(90);
    const result = { ...status, ...saveInstance}
    if(status.SUCCESS){
        const items = req.body.items.map(item => toServer(item))
        getInstanceItems.DATA.ITEMS = items;
        console.log('saveInstance', getInstanceItems.DATA.ITEMS.length)
    }
    try {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result));
    } catch (error) {
        next(createError(501));
    }
})

router.post(`${baseUrl}/updateChecklistActiveStatus`, (req, res, next) => {
    const status = requestResult(90);
    const result = { ...status, ...updateChecklistActiveStatus}

    try {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result));
    } catch (error) {
        next(createError(501));
    }
})

module.exports = router;
