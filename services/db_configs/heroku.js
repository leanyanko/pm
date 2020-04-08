const config = { 
    user: 'mlhfywmsznshei',         
    host: 'ec2-52-86-73-86.compute-1.amazonaws.com',  
    database: 'dfih5e26clnfsm',
    password: '909e4b3bd77a8f63970356146de1dc2f16bbe8c9c9d1564e2b8a71d35e3c6454',
    port: 5432
}

//const connectionString = 'postgres://ehpkyxgsqozlpz:ad2a580fb555543fd5e67a72fddddb9d3e828de43302ac5a0c9272c0e62e0488@ec2-18-209-187-54.compute-1.amazonaws.com:5432/d9velufuf9gmbp';
const connectionString = 'postgres://mlhfywmsznshei:909e4b3bd77a8f63970356146de1dc2f16bbe8c9c9d1564e2b8a71d35e3c6454@ec2-52-86-73-86.compute-1.amazonaws.com:5432/dfih5e26clnfsm';
module.exports = { config, connectionString };