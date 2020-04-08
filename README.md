# This application supports api for managin investors database

## Application is running at

### `https://parallelm.herokuapp.com/`  

## No need for local insallation

## Installation if necessary:

`git clone https://github.com/meinou/pm.git`

`npm install`

### run

`npm start`


## to access database see 

[`db_configs/info.md`](https://github.com/meinou/pm/blob/master/services/db_configs/info.md)

## API:
### GET list of all investors
`/investors`

### GET single investors by ID
`/investors/:id`

### POST new investor to database
`/investors`

### DELETE investor from database
`/investors/:id`

### UPLOAD miltiple files to servers file system `/uploads` folder
`/investors/upload`

## TODO:

 * Create a model for INVESTOR and DOCUMENT

 * Documents table
Create separate table for all the documents where DOCUMENT_ID would be PRIMARY KEY and INVESTOR_ID FOREIGN KEY to link uploaded files with investor

 * Validate if too many files to upload
Limit number of files can be uploaded

 * Validate request body before creating new investor

 * Tests

