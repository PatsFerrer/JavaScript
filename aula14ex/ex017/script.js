function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert("Por favor, digite um número!")     
    } else {
        let n = Number(num.value) // transformei a variavel 'num' em number dentro da variavel 'n'
        let cont = 1
        tab.innerHTML = '' //limpa a area de tabuada antes de começar outra
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }
}