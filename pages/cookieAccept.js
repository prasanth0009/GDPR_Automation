var cookieBannerAccept ={	
	acceptCookie: function(){
		this
			.waitForElementVisible('@cookieAlertBox',3000)        		   
			.click('@cookieAccept')
    }
}

module.exports = {
	commands: [cookieBannerAccept],
	elements: {		
		cookieAlertBox: { selector: '.optanon-alert-box-wrapper' },
		cookieAccept: { selector: '.optanon-button-allow .optanon-allow-all' }		
    }
};
