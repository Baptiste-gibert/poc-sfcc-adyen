'use strict';
/**
 * @module adyencheckout
 */

var HOME_BREADCRUMB = {
    name: dw.web.Resource.msg('global.home', 'locale', null),
    url: dw.web.URLUtils.httpHome()
};

/**
 * Constructor for metadata singleton
 *
 * This should be initialized via the current context object (product, category, asset or folder) and can
 * be used to retrieve the page metadata, breadcrumbs and to render the accumulated information to the client
 *
 * @class
 */
var AdyenCheckout = function () {
    this.data = {
        page: {
            title: '',
            description: '',
            keywords: ''
        },
        // supports elements with properties name and url
        breadcrumbs: [HOME_BREADCRUMB],
        resources: {}
    };
};

AdyenCheckout.prototype = {
    
    getPayLoad: function () {

       /* var params = {
            reference : 'ABC 123',
            amount : [
              'value' : 1567,
              'currency' : 'EUR'
            ],
            shopperReference : 'shopper@example.org',
            shopperLocale : 'nl_NL',
            countryCode : 'NL',
            channel : 'web',
            html : true,
            origin : 'http://' . $_SERVER['HTTP_HOST'],
            shopperIP : $_SERVER['REMOTE_ADDR'],
            returnUrl : 'http:///verify.php',
            merchantAccount : $config['merchantAccount']
        };*/
        var params = {};
        var service = require('dw/svc').ServiceRegistry.get('adyen.form.setup');
         var response = service.call(params);

        return JSON.stringify(response.object);
    }
};

/**
 * Singleton instance for meta data handling
 * @type {module:adyencheckout~AdyenCheckout}
 */
module.exports = new AdyenCheckout();
