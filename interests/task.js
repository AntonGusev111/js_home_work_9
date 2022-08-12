function findInterest(){
    const box = document.querySelectorAll('.interest')
    for (let i = 0; i < box.length; i++){
        box[i].addEventListener('change', () => {
            console.log(box[i])
            if (box[i]['firstElementChild']['firstElementChild'].checked){
                console.log('if')
                switchBoxis(box[i], true);
                return false
            }
            else {
                console.log('else')
                switchBoxis(box[i], false);   
            }  
        })
    }
    
}

//Прошу объяснить, почему вложенные чекбоксы не проставляются а цикл срабатывает на условие else

function switchBoxis(elem, bool){
    const boxis = elem.querySelectorAll('.interest__check');
    for (let i =0; i < boxis.length;i++){
        boxis[i].checked = bool;
    }
}

findInterest()