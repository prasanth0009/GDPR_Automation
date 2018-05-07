var CookieAllowall ={	
	allowAll: function(){
		this			
            .waitForElementVisible('@optanon-popup-body',3000)
            .click('@AllowallBtn')						
    }
}


module.exports = {
	commands: [CookieAllowall],
	elements: {
		cookieAlertBox: { selector: '.optanon-alert-box-wrapper' },
        cookieSettings: { selector: '.optanon-toggle-display' },
        CookiePopup: { selector: '.optanon-popup-body' },
        AllowallBtn: { selector: '#optanon-popup-bottom .optanon-allow-all .optanon-white-button-middle' }
    }
};
