# Vendor Model Data
This is a proposal for a simple to extend format for Vendor Model Data. 

## Benefits of Github
1. Easy versioning
2. Familiar pull-requests
3. Easy / Secure for 3rd parties to fork

## The layout
/vendors/vendors.json ... all the vendor related data incl. vendor-id

/vendors/{vendor-id}/logo.png

/vendors/{vendor-id}/models/{model-id}/thumbnail.png

/vendors/{vendor-id}/models/{model-id}/{model-id}.json
