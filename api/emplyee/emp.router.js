const { response } = require('express');
const {
    createEmp,
    getEmpDetailByID,
    updateEmpData,
    deleteEmpData,
    getEmpList
} = require('./emp.controller');

const router = require('express').Router();

/* router.post('/', (req, resp) => {
    resp.send('Here');
}); */
router.post('/', createEmp);
router.get('/list', getEmpList);
router.get('/detail/:id', getEmpDetailByID); 
router.patch('/update', updateEmpData);
router.delete('/delete', deleteEmpData);

module.exports = router;