// document.getElementById("change").addEventListener("click", change);
// function change() {
//     const xhr = new XMLHttpRequest();

//     xhr.open("GET", "https://api.exchangeratesapi.io/latest");
//     xhr.onload = function () {
//         if (this.status) {
//             const response = JSON.parse(this.responseText);

//            const rate = response.rates.TRY
//            const amount = Number (document.getElementById("amount").value);
//           document.getElementById("tl").value = amount * rate;

//         }
//     }
//     xhr.send();
// }
//ajax callback, http request

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();

    }
    get(url, callback) {
        this.xhr.open("GET", url);// bağlantı açık

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                //hata durumu
                callback("herhangi bir hata oluştu", null);
            }
        };


        this.xhr.send();


    }
    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("content-type", "application/json"); //json verisi
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                //başarılı
                callback(null, this.xhr.responseText);
            }
            else {
                callback("hata oluştu");

            }
        }
        this.xhr.send(JSON.stringify(data));

    }
    delete(url, callback) {
        this.xhr.open("DELETE", url);// bağlantı açık
    
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, "veri silme işlemi gerçekleşti");
            }
            else {
                //hata durumu
                callback("herhangi bir hata oluştu", null);
            }
    };
    
    
        this.xhr.send();
    }
}

const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums", function(err,response){
//     if (err === null){
//         //başarılı
//         console.log(response);
//     }
//     else{
//         //hata
//         console.log(err);
//     }

// });

// request.post("https:jsonplaceholder.typicode.com/albums", { userId: 2, title: "müslüm" }, function (err, album) {
//     if (err === null) {
//         console.log(album);
//     }
//     else {
//         //hata 
//         console.log(err);
//     }
// });

// request.put("https:jsonplaceholder.typicode.com/albums/10", { userId: 142, title: "ferdi" }, function (err, album) {
//     if (err === null) {
//         console.log(album);
//     }
//     else {
//         //hata 
//         console.log(err);
//     }
// });



    request.delete("https://jsonplaceholder.typicode.com/albums/10", function(err,response){
    if (err === null){
        //başarılı
        console.log(response);
    }
    else{
        //hata
        console.log(err);
    }

});