var cookieSettings ={	
	settingsCookie: function(){
		this
			.waitForElementVisible('@cookieAlertBox',3000)        		   
			.click('@cookieSettingButton')
    }
}

module.exports = {
	commands: [cookieSettings],
	elements: {		
		cookieAlertBox: { selector: '.optanon-alert-box-wrapper' },
		cookieSettingButton: { selector: '.optanon-button-more .optanon-toggle-display' }		
    }
};
