var myRequest = new Request({
    url: 'image.jpg',
    onProgress: function(event, xhr){
        var loaded = event.loaded, total = event.total;
 
        console.log(parseInt(loaded / total * 100, 10));
    }
});
 
myRequest.send();

