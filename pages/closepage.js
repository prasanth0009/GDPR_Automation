var closeWindow ={	
	windowClose: function(){
		this
			.waitForElementVisible('@body',3000)        		   
            .api.execute(function editClick(data) {
                window.close();
            });
                
            
    }
}

module.exports = {
	commands: [closeWindow],
	elements: {		
		body: { selector: 'body' }			
    }
};
