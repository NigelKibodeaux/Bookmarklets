javascript:(function(){
    function handleClick(e){ 
        e.srcElement.style.width = '100%'; 
        e.srcElement.style.maxWidth = '';  
        var dad = e.srcElement.parentElement; 
        while (dad != null) { 
            console.log(dad); 
            dad.style.width = '100%'; 
            dad.style.maxWidth = ''; 
            dad.style.padding = '0px'; 
            dad = dad.parentElement; 
        }  
        document.removeEventListener('click', handleClick); 
    }   
    
    document.addEventListener('click', handleClick); 
})();
