const conn = require('../../config/database');
module.exports = {
    create: (data, callback) => {
        conn.query(
            `insert into employee (fisrtname, lastname, email, mobile) 
                    values(?,?,?,?)`,
            [
                data.firstname,
                data.lastname,
                data.email,
                data.mobile
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                // below return success  
                return callback(null, results);
            }
        );
    },
    
    getEmpByID: (id, callback) => {
        conn.query(
            `select id, fisrtname, lastname, email, mobile from employee where id=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                // below return success  
                return callback(null, results[0]);
            }
        );
    },

    updateEmp: (data, callback) => {
        conn.query(
            `update employee set fisrtname=?, lastname=?, email=?, mobile=? where id=? `,
            [
                data.firstname,
                data.lastname,
                data.email,
                data.mobile,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                // below return success  
                return callback(null, results);
            }
        );
    },

    deleteEmp: (data, callback) => {
        conn.query(
            `delete from employee where id=?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                // below return success  
                return callback(null, results);
            }
        );
    },

    getEmp: callback => {
        conn.query(
            `select id, fisrtname, lastname, email, mobile from employee`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                // below return success  
                return callback(null, results);
            }
        );
    },
}