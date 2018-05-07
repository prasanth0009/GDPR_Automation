var cookieBannerClose ={	
	closeCookie: function(){
		this
			.waitForElementVisible('@cookieAlertBox',3000)        		   
			.click('@cookieClose')
    }
}

module.exports = {
	commands: [cookieBannerClose],
	elements: {		
		cookieAlertBox: { selector: '.optanon-alert-box-wrapper' },
		cookieClose: { selector: '.optanon-alert-box-corner-close' }		
    }
};
