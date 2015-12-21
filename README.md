# c9config
offers data about workspace in an accessile JS object

# Project Status
[![Build Status](https://travis-ci.org/GitZoneTools/c9config.svg?branch=master)](https://travis-ci.org/GitZoneTools/c9config)


### Install
to install simply type

```
npm install c9config
```

### Usage

```javascript
var c9config = require("c9config");
c9config.isC9 // true or false depending wether on C9 or not.
c9config.print() // prints an overview of the important information to console
c9config.workspace // an object that holds the important worspace information
/* ----------- object currently looks like this ------
 *  {
 *      isC9: true,
 *      name: 'workspacename',
 *      owner: 'username',
 *      ideUrl: 'https://ide.c9.io/username/workspacename',
 *      serveUrl: 'https://workspacename-username.c9user.io'
 *  }
 */
```
