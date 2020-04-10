const Pool = require('pg').Pool;
const { config } = require('./db_configs/aws');
const pool = new Pool(config);

const getAllInvestors = () => new Promise((resolve, reject) => {
    pool.query('SELECT * FROM investors ORDER BY id ASC', (err, result) => {
        resolve(result.rows);
        reject(new Error(err));
    })
})

const getInvestorById = (id) => {
    return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM investors WHERE id = $1', [id], (err, result) => {
            resolve(result.rows);
            reject(new Error(err));
        });
    });
}  

const createInverstor = (first_name, last_name, dob, phone, address, city, state, zipcode) => {
    return new Promise((resolve, reject) => {
            pool.query(`INSERT INTO investors 
            (first_name, last_name, dob, phone, address, city, state, zipcode)
        VALUES 
            ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *`,
        [first_name, last_name, dob, phone, address, city, state, zipcode], (err, result) => {
            console.log('db', result.rows[0].id);
            resolve(result);
            reject(new Error(err));
        });
    });
}  

const deleteInversor = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM investors WHERE id=$1', [id], (err, result) => {
            resolve(result);
            reject(new Error(err));
        })
    });
}

const addDocumentEntry = (investor_id, filename) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO documents
        (investor_id, full_filename)
        VALUES ($1, $2)
        RETURNING *`),
        [investor_id, filename], (err, result) => {
            resolve(result);
            reject(new Error(err));
        }
    });
}

module.exports = {
    getAllInvestors,
    getInvestorById,
    createInverstor,
    deleteInversor,
    addDocumentEntry
}


        
 