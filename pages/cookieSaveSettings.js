var CookieSaveSettings ={	
	saveSettings: function(){
		this			
            .waitForElementVisible('@settingsPopup',3000)
            .api.pause(5000)
        this			
            .waitForElementVisible('@settingsPopup',3000)
            .click('@saveSettingsBtn')						
    }
}


module.exports = {
	commands: [CookieSaveSettings],
	elements: {
        settingsPopup: { selector: '#optanon-popup-wrapper' },
        saveSettingsBtn: { selector: '.optanon-close.optanon-close-consent .optanon-white-button-middle' }
    }
};
