function display_Data(){
    //alert('Test Case 123')
    //console.log("Test Case 123")
    //document.writeln("Test Case 123")
    let pTag=document.getElementsByTagName('p')[0]
    console.log(pTag)
    pTag.innerHTML=new Date().toDateString()
}