var cookieSwitchFn ={	
	activateBtn: function(tabMenu){
		this
            .waitForElementVisible('@cookieConsentPopupRight',3000) 
            .click('@activeBtn');       		              	
    }
}

module.exports = {
	commands: [cookieSwitchFn],
	elements: {		
		cookieConsentPopupRight: { selector: '#optanon-popup-body-right' },
        activeBtn: { selector: '#optanon-popup-more-info-bar' }
    }
};
