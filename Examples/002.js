require([‘DOM/Node’, ‘Request’], function(Node, Request){

var myElement = Node.select('myElement');
 
var myRequest = new Request({
    url: 'getMyText.php',
    method: 'get',
    onRequest: function(){
        myElement.set('text', 'loading...');
    },
    onSuccess: function(responseText){
        myElement.set('text', responseText);
    },
    onFailure: function(){
        myElement.set('text', 'Sorry, your request failed :(');
    }
});
 
Node.select('myLink').addEvent('click', function(event){
    event.stop();
    myRequest.send('userid=' + this.get('data-userid'));
});

});
