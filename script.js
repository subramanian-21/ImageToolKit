function ImageConvert(){
    let fileConvert = document.getElementById("fileconvert").value
    let typeSelect = document.getElementById("filetype").value

    if(!fileConvert || !typeSelect){
        alert("Upload file and select Type")
    }

}
function ImageCompresser(){
    let fileCompress = document.getElementById("fileconvert").value
    let compressSize = document.getElementById("filetype").value
    if(!fileCompress || !compressSize)
    {
        alert("Upload file and Enter Size")
    }
}