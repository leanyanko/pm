# This application supports api for managin investors database

## to access database see 

`db_configs/info.md`

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

### Documents table
Create separate table for all the documents where DOCUMENT_ID would be PRIMARY KEY and INVESTOR_ID FOREIGN KEY to link uploaded files with investor

### Validate if too many files to upload
Limit number of files can be uploaded

### Validate request body before creating new investor

