var cookieOptionTabs ={	
	optionTab: function(tabMenu){
		this
			.waitForElementVisible('@cookieConsentPopupLeft',3000)        		   
            
            .api
	            .useXpath()				
				.click("//*[contains(text(),'"+tabMenu+"')]")
                .useCss()           	
    }
}

module.exports = {
	commands: [cookieOptionTabs],
	elements: {		
		cookieConsentPopupLeft: { selector: '#optanon-popup-body-left' }
    }
};
