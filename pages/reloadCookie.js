/* Select navigation page such as Project, Sites, Experience Fragments etc.. */

var reload2 ={
	reloadPage: function() {
                this.waitForElementVisible('@body',3000)
                // this.api.refresh();
                        .api.execute(function(){
                                window.location.reload(true);
                        })                                                                                
        }
}

module.exports = {
	commands: [reload2],
	elements:{
                body: { selector: 'body' }
        }
};



