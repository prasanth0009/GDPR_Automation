/* Select navigation page such as Project, Sites, Experience Fragments etc.. */

var validateCookie ={
	validateCookie: function(cookieDOM) {
                this.waitForElementVisible('@body',3000);
                var items = cookieDOM;
                var arrayCookie = items.split(' | ');  
                var _this = this.api;
                arrayCookie.forEach(function(value){                                            
                        _this.getCookie(value, function (result) {
                                if (!result) {
                                  console.log('No cookie named: ', value);
                                }
                          else if(result.name == value){
                                        console.log('Cookie is Available:', result.name);
                                }else if(result.name == '' ){
                                        console.log('Cookie is Not Available'); 
                                }                                
                        })
                })                           
  },

    validateThirdPartyCookie: function(checkCookiesList) {
        this.waitForElementVisible('@body',3000);
        var _this = this.api;
        this.api.execute(
            function() {
                return allCookies;
            },
            [],
            function(result) {
                var allCookies = result.value;
                checkCookiesList.forEach(function(value){
                    let cookie = allCookies[value];
                    if (typeof cookie === 'undefined') {
                        console.log('Cookie is not available: ', value);
                    }
                    else {
                        console.log('Cookie is available: %s domain: %s', cookie.name, cookie.domain);
                    }
                });
            });
    }
}

module.exports = {
    commands: [validateCookie],
    elements:{
        body: { selector: 'body' }
    }
};