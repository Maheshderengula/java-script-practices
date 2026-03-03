var imgStr;
function img2str(event){
    //get the image file and convert into str 
    //and dispay str in below
    let imgFile=document.getElementById('imgFile').files[0];
    event.preventDefault();
    let reader=new FileReader();
    reader.readAsDataURL(imgFile);
    reader.addEventListener('load',()=>{
        if(reader.result){
            //console.log(reader.result)
            imgStr=reader.result;
            document.getElementById('taTag').innerHTML=reader.result;
            //document.getElementById('pTag').innerHTML="Working"
        }
    })
}

function str2Image(event){
    event.preventDefault();
    console.log(imgStr)
    document.getElementById('img2').src=imgStr;
}