
document.querySelector('#button').addEventListener('click', function(){
    const output = document.querySelector("#output");
    const requestUrl = 'https://api.github.com/users/deepaklowanshi10x'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl) // api ko request bhejte he 
    xhr.onreadystatechange= function(){
        //console.log(xhr.readyState);
        if(xhr.readyState === 4){ 
            //const data = this.responseText // var me store kar liya 
            const data = JSON.parse(this.responseText); // convert data string to JSON
            output.innerHTML = data.twitter_username// data undefine aayega ushka type kare to string aayega ushko convert karna padega conver karne ke eliye
            // data .// followers, location sabhi data nikal sakte he s
        }
    }       // continue karne ke liye state change karte he 
    
    xhr.send() 
    }) 

    document.querySelector('#buttongit').addEventListener('click', function(){
    const output = document.querySelector("#output");
    const requestUrl = 'https://api.github.com/users/deepaklowanshi10x'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl) // api ko request bhejte he 
    xhr.onreadystatechange= function(){
        //console.log(xhr.readyState);
        if(xhr.readyState === 4){ 
            //const data = this.responseText // var me store kar liya 
            const data = JSON.parse(this.responseText); // convert data string to JSON
            output.innerHTML = data.login// data undefine aayega ushka type kare to string aayega ushko convert karna padega conver karne ke eliye
            // data .// followers, location sabhi data nikal sakte he s
        }
    }       // continue karne ke liye state change karte he 
    
    xhr.send() 
    })

    document.querySelector('#buttongitid').addEventListener('click', function(){
    const output = document.querySelector("#output");
    const requestUrl = 'https://api.github.com/users/deepaklowanshi10x'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl) // api ko request bhejte he 
    xhr.onreadystatechange= function(){
        //console.log(xhr.readyState);
        if(xhr.readyState === 4){ 
            //const data = this.responseText // var me store kar liya 
            const data = JSON.parse(this.responseText); // convert data string to JSON
            output.innerHTML = data.id// data undefine aayega ushka type kare to string aayega ushko convert karna padega conver karne ke eliye
            // data .// followers, location sabhi data nikal sakte he s
        }
    }       // continue karne ke liye state change karte he 
    
    xhr.send() 
    })