var switchTab ={	
	tabSwitch: function(){
		this
			.waitForElementVisible('@body',3000)        		   
            .api.window_handles(function(result){
                var tab = result.value[0];
                this.switchWindow(tab);
             })
    }
}

module.exports = {
	commands: [switchTab],
	elements: {		
		body: { selector: 'body' }			
    }
};
