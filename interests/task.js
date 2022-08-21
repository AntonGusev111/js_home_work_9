function findInterest(){
    const box = document.querySelectorAll('.interest__check')

    for (let i = 0; i < box.length; i++){
        box[i].addEventListener('change', () => {
            //console.log(box[i].parentNode.parentNode.parentNode.className=='')
            console.log(box[i].parentNode.parentNode)
            if (box[i].checked){
                switchBoxis(box[i].parentNode.parentNode, true);
                return false;
            } else {
                switchBoxis(box[i].parentNode.parentNode, false);
                return false;
            }
        })
    }
}


function switchBoxis(elem, bool){
    const boxis = elem.querySelectorAll('.interest__check');
    for (let i =0; i < boxis.length;i++){
        boxis[i].checked = bool;
    }
    return false
}

findInterest()