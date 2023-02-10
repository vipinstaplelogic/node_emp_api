const {
    create,
    getEmpByID,
    updateEmp,
    deleteEmp,
    getEmp,
} = require('./emp.service');

module.exports = {
    createEmp: (req, resp) => {
        const body = req.body;
        // call service-method
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return resp.status(500).json({
                    success: 0,
                    message: 'Record not created',
                });
            }
            return resp.status(200).json({
                success: 1,
                message: 'Records created successfully',
                data: results
            });
        });
    },

    getEmpList: (req, resp) => {
        // call service-method
        getEmp((err, results) => {
            if (err) {
                console.log(err);
                return resp.status(500).json({
                    success: 0,
                    message: 'Records not found',
                });
            }
            return resp.status(200).json({
                success: 1,
                message: 'Records listed successfully',
                data: results
            });
        });
    },

    getEmpDetailByID: (req, resp) => {
        const rec_id = req.params.id;
        // call service-method
        getEmpByID(rec_id, (err, results) => {
            if (err) {
                console.log(err);
                return resp.status(500).json({
                    success: 0,
                    message: 'Something went wrong',
                });
            }
            if (!results) {
                return resp.status(500).json({
                    success: 0,
                    message: 'Record not found',
                });
            }
            return resp.status(200).json({
                success: 1,
                message: 'Records found successfully',
                data: results
            });
        });
    },

    updateEmpData: (req, resp) => {
        const body = req.body;
        // call service-method
        updateEmp(body, (err, results) => {
            if (err) {
                console.log(err);
                return resp.status(500).json({
                    success: 0,
                    message: 'Record not updated',
                });
            }
            return resp.status(200).json({
                success: 1,
                message: 'Records updated successfully',
                data: results
            });
        });
    },
    deleteEmpData: (req, resp) => {
        const body = req.body;
        // call service-method
        deleteEmp(body, (err, results) => {
            if (err) {
                console.log(err);
                return resp.status(500).json({
                    success: 0,
                    message: 'Record not deleted',
                });
            }
            return resp.status(200).json({
                success: 1,
                message: 'Records deleted successfully',
                data: results
            });
        });
    },

}