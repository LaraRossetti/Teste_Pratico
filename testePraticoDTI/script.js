function imprimirResultado(){
    let nums1 = window.document.getElementById('nums1txt')
    let m = window.document.getElementById('mtxt')
    let nums2 = window.document.getElementById('nums2txt')
    let n = window.document.getElementById('ntxt')
    let resultado = window.document.getElementById('resultado')

    m = Number(m.value)
    n = Number(n.value)

    nums1 = String(nums1.value)
    nums2 = String(nums2.value)

    let lista1 = nums1.split(',')
    let lista2 = nums2.split(',')

    resultado.innerHTML = `<p> O resultado da mesclagem é [${Mesclar(lista1, m, lista2, n)}].</p>`
}



function Mesclar(nums1, m, nums2, n){

    let arrayCortado1 = nums1.slice(0, m)
    let arrayCortado2 = nums2.slice(0, n)
    let arrayOrdenado = []

    while(arrayCortado1.length != 0 && arrayCortado2.length != 0){
        
        if(arrayCortado1[0] < arrayCortado2[0]){
            arrayOrdenado.push(arrayCortado1[0])
            arrayCortado1.shift()
        }else{
            arrayOrdenado.push(arrayCortado2[0])
            arrayCortado2.shift()
        }
    }

    arrayOrdenado = arrayOrdenado.concat(arrayCortado1)
    arrayOrdenado = arrayOrdenado.concat(arrayCortado2)

    return arrayOrdenado
}

function resetar(){

    let nums1 = window.document.getElementById('nums1txt')
    let m = window.document.getElementById('mtxt')
    let nums2 = window.document.getElementById('nums2txt')
    let n = window.document.getElementById('ntxt')
    let resultado = window.document.getElementById('resultado')
    
    resultado.innerHTML = ''
    nums1.value = ''
    nums2.value = ''
    m.value = ''
    n.value = ''
}