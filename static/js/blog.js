document.addEventListener("DOMContentLoaded",function(e){
    console.log("This is blog.js");
    let sc=document.createElement('script')
    sc.setAttribute('src','https://cdn.tiny.cloud/1/add-an-apikey-here/tinymce/5/tinymce.min.js');

    document.head.appendChild(sc);
    sc.onload=()=>{
    tinymce.init({
        selector: '#id_content'
      });
    }
});