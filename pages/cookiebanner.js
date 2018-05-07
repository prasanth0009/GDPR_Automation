var cookiebanner ={	
	cookieBannerpop: function(){
		this
			.waitForElementVisible('@cookieAlertBox',3000)        		   			
    }
}

module.exports = {
	commands: [cookiebanner],
	elements: {
		body: { selector: 'body' },
		cookieAlertBox: { selector: '.optanon-alert-box-wrapper' },
		cookieClose: { selector: '.optanon-alert-box-corner-close' },
		logo: { selector: '.c-header__logo-image' }

		
    }
};
