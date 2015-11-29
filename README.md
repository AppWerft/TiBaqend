Titanium Adapter for Baqend 
===========================
![](https://fbcdn-photos-g-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p160x160/1175532_1435043336734661_1180604515_n.png?oh=86dc0c271144743b63db5e4380243bf9&oe=56F16ED2&__gda__=1458345230_3b278d13b81b1751c3f0ee0c060c5b83)

Setup
-----

To use the Baqend Adapter, just include the module in your ti.app.xml

~~~~
 <module>tibaqend</module>
~~~~
.
Alternatively you can install the Ti.Baqend SDK with gittio. Just type `gittio install tibaqend --global` 

```html
```

Ti.Baqend  a global `DB` variable by default.

Initialize
----------

Before you can actually use the Baqend SDK, you must link the Baqend SDK to your Baqend Account.
Just call `DB.connect(Ti.App.Properties.getString(YOURENDPOINRT));` after including the Baqend SDK.

The Baqend SDK connects to your Baqend and initialize the SDK. If the connection was successfully established
the ready callback will be called and the DB can be used to load, query and save objects.

```javascript
var DB = require(ti.baqend);

// connects to your Baqend Account
DB.connect(Ti.App.Properties.getString(YOURENDPOINRT));

// waits while the SDK connects to your Baqend
DB.ready(function() {
    // work with your Baqend
    DB.User.find()
        ...
});
```

License
-------

This Baqend SDK is published under the very permissive [MIT license](LICENSE.md)