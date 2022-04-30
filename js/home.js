function pesquisaCep(){

    var cepDigitado = document.querySelector("#cepDigitado").value
    if(cepDigitado.length < 8 && cepDigitado.length > 9) {
            swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Parece que o numero de Cep não é valido! Por favor, verifique novamente',
                footer: '<a href="">Why do I have this issue?</a>'
            });
    } else {
        document.querySelector("#loading").style.display = "block"
        fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`).then((response)=>{
        document.querySelector("#loading").style.display = "none"
        return response.json()
    }).then((response)=>{
        if(response.erro){
            swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Parece que o numero de Cep não é valido! Por favor, verifique novamente',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        } else {
            document.querySelector("#conteudo").insertAdjacentHTML('beforeend', `
                
            <tr>
                    <td>${response.logradouro}</td>
                    <td>${response.bairro}</td>
                    <td>${response.localidade}</td>
                    <td>${response.uf}</td>
                    <td>${response.cep}</td>
                    <td>${response.complemento}</td>
                </tr>
            
            
            `)
            // document.querySelector("#logradouro").innerText = response.logradouro
            // document.querySelector("#bairro").innerText = response.bairro
            // document.querySelector("#cidade").innerText = response.localidade
            // document.querySelector("#uf").innerText = response.uf
            // document.querySelector("#cep").innerText = response.cep
            // document.querySelector("#complemento").innerText = response.complemnto
        }
    })
    }
}