function CalcularFrete(){
    numeroCEP = document.getElementById("cep").value
    console.log(numeroCEP)

    fetch(`https://viacep.com.br/ws/${numeroCEP}/json/`).then(response => {
    return response.json()
    }).then(corpo => {

        console.log(corpo.logradouro)
        console.log(corpo.localidade)
        console.log(corpo.bairro)
        console.log(corpo.uf)

        frete = 50

        // Frete Mogi
        if(corpo.localidade == "Mogi das Cruzes"){
            valorFrete = frete - frete
            document.getElementById("valor").innerHTML= "Para Mogi das Cruzes o frete será grátis"
            return
        }

        // Frete Sudeste
        if(corpo.uf == "SP" || corpo.uf == "RJ" || corpo.uf == "ES" || corpo.uf == "MG"){
            valorFrete = frete/2
            document.getElementById("valor").innerHTML= "Para a região Sudeste o frete será de R$" + valorFrete + ",00"
            return
        }

        // Frete Sul
        if(corpo.uf == "RS"|| corpo.uf == "SC" || corpo.uf == "PR"){
            valorFrete = frete*0.6
            document.getElementById("valor").innerHTML= "Para a região Sul o frete será de R$" + valorFrete + ",00"
            return
        }

        // Frete Nordeste
        if(corpo.uf == "BA" || corpo.uf == "PE" || corpo.uf == "CE" || corpo.uf == "AL" || corpo.uf == "SE" || corpo.uf == "MA" || corpo.uf == "PB" || corpo.uf == "RN" || corpo.uf == "PI"){
            valorFrete = frete*0.8
            document.getElementById("valor").innerHTML= "Para a região Nordeste o frete será de R$" + valorFrete + ",00"
            return
        }

        // Frete Norte
        if(corpo.uf == "RO" || corpo.uf == "RR" || corpo.uf == "AM" || corpo.uf == "AC" || corpo.uf == "TO" || corpo.uf == "PA" || corpo.uf == "AP"){
            valorFrete = frete
            document.getElementById("valor").innerHTML= "Para a região Norte o frete será de R$" + valorFrete + ",00"
            return
        }

        // Frete Centro Oeste
        if(corpo.uf == "GO" || corpo.uf == "MT" || corpo.uf == "MS" || corpo.uf == "DF"){
            valorFrete = frete*0.9
            document.getElementById("valor").innerHTML= "Para a região Centro-Oeste o frete será de R$" + valorFrete + ",00"
            return
        }
    })
}

function CalcularFrete2(){
    numeroCEP = document.getElementById("cep").value
    console.log(numeroCEP)

    fetch(`https://viacep.com.br/ws/${numeroCEP}/json/`).then(response => {
    return response.json()
    }).then(corpo => {

        if(corpo.logradouro == ""){
            document.getElementById("rua").value = "Não Encontrado"
        }
        if(corpo.localidade == ""){
            document.getElementById("cidade").value = "Não Encontrado"
        }
        if(corpo.bairro == ""){
            document.getElementById("bairro").value = "Não Encontrado"
        }
        if(corpo.uf == ""){
            document.getElementById("estado").value = "Não Encontrado"
        }

        document.getElementById("rua").value = corpo.logradouro
        document.getElementById("cidade").value = corpo.localidade
        document.getElementById("bairro").value = corpo.bairro
        document.getElementById("estado").value = corpo.uf

        console.log(corpo.logradouro)
        console.log(corpo.localidade)
        console.log(corpo.bairro)
        console.log(corpo.uf)

        frete = 50

        // Frete Mogi
        if(corpo.localidade == "Mogi das Cruzes"){
            valorFrete = frete - frete
            document.getElementById("frete").value= "O frete será grátis"
            return
        }

        // Frete Sudeste
        if(corpo.uf == "SP" || corpo.uf == "RJ" || corpo.uf == "ES" || corpo.uf == "MG"){
            valorFrete = frete/2
            document.getElementById("frete").value= "O frete será de R$" + valorFrete + ",00"
            return
        }

        // Frete Sul
        if(corpo.uf == "RS"|| corpo.uf == "SC" || corpo.uf == "PR"){
            valorFrete = frete*0.6
            document.getElementById("frete").value= "O frete será de R$" + valorFrete + ",00"
            return
        }

        // Frete Nordeste
        if(corpo.uf == "BA" || corpo.uf == "PE" || corpo.uf == "CE" || corpo.uf == "AL" || corpo.uf == "SE" || corpo.uf == "MA" || corpo.uf == "PB" || corpo.uf == "RN" || corpo.uf == "PI"){
            valorFrete = frete*0.8
            document.getElementById("frete").value= "O frete será de R$" + valorFrete + ",00"
            return
        }

        // Frete Norte
        if(corpo.uf == "RO" || corpo.uf == "RR" || corpo.uf == "AM" || corpo.uf == "AC" || corpo.uf == "TO" || corpo.uf == "PA" || corpo.uf == "AP"){
            valorFrete = frete
            document.getElementById("frete").value= "O frete será de R$" + valorFrete + ",00"
            return
        }

        // Frete Centro Oeste
        if(corpo.uf == "GO" || corpo.uf == "MT" || corpo.uf == "MS" || corpo.uf == "DF"){
            valorFrete = frete*0.9
            document.getElementById("frete").value= "O frete será de R$" + valorFrete + ",00"
            return
        }
    })
}

