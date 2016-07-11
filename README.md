Rakuten LinkShare API Helper Methods
------------------------------------

Contains utilities to simplify interaction with the Rakuten LinkShare Affiliate Marketing Network APIs.

Provides support for the following data types:

 - Merchants
 - Links
 - Transactions

Bear in mind that some calls may take a little while to return if they contain a large data set. This is because we do multiple API calls to get all pages of data, which we then stitch together in the output for your benefit.

## Prerequisites

 - Node.js / NPM

## Install

```
npm i rakuten-linkshare --save
```

## Usage

```
var RL = new RakutenLinkShare({
  websiteId: '123456'
})
```

### Advertisers

Get a list of all advertisers in the Rakuten LinkShare system

```
RL.getAdvertisers()
```

### Links

Get links linked to the websiteId

```
RL.getLinks()
```

### Transactions

Get transactions linked to the websiteId

```
RL.getTransactions()
```

## Test

```
npm test
```
