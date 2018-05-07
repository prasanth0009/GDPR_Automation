/* Select navigation page such as Project, Sites, Experience Fragments etc.. */

var intialCookie ={	
	getCookie: function() {
                this.waitForElementVisible('@body',2000)                   		
                
                
	}
}

module.exports = {
	commands: [intialCookie],
	elements:{
        body: { selector: 'body' }		
	}
};



