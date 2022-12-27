document.getElementById("divmove").addEventListener("mouseover",funcao)
        document.getElementById("divmove").addEventListener("mouseout",funcao2)

        document.getElementById("esquerda").addEventListener("mouseover",funcao3)
        document.getElementById("esquerda").addEventListener("mouseout",funcao4)

        document.getElementById("direita").addEventListener("mouseover",funcao5)
        document.getElementById("direita").addEventListener("mouseout",funcao6)

        function funcao(){
            document.getElementById("sobremim2").style.animation = "ani 1s infinite"
            document.getElementById("sobremim3").style.animation = "ani 1s infinite"
            document.getElementById("sobremim3").style.animationDelay = "0.5s"
            document.getElementById("sobremim1").style.webkitFilter = "drop-shadow(0px 00px  1rem #0c5ef5) drop-shadow(0px 00px  1rem #0c5ef5)"
            document.getElementById("icone_pessoa").style.webkitFilter = "drop-shadow(0px 00px  1rem #0c5ef5)"
            document.getElementById("sobremim").style.opacity = "1"
        }
        function funcao2(){
            document.getElementById("sobremim2").style.animation = "ani 0s 0"
            document.getElementById("sobremim3").style.animation = "ani 0s 0"
            document.getElementById("sobremim1").style.webkitFilter = "none"
            document.getElementById("icone_pessoa").style.webkitFilter = "none"
            document.getElementById("sobremim").style.opacity = "0"
        }
        function funcao3(){
            document.getElementById("projetos2").style.animation = "ani 1s infinite"
            document.getElementById("projetos3").style.animation = "ani 1s infinite"
            document.getElementById("projetos").style.webkitFilter = "drop-shadow(0px 00px  1rem #0c5ef5) drop-shadow(0px 00px  1rem #0c5ef5)"
            document.getElementById("projetos3").style.animationDelay = "0.5s"
            document.getElementById("icone_projetos").style.webkitFilter = "drop-shadow(0px 00px  1rem #0c5ef5) drop-shadow(0px 00px  1rem #0c5ef5)"
            document.getElementById("projetoss").style.opacity = "1"
        }
        function funcao4(){
            document.getElementById("projetos2").style.animation = "ani 0s 0"
            document.getElementById("projetos3").style.animation = "ani 0s 0"
            document.getElementById("projetos").style.webkitFilter = "none"
            document.getElementById("icone_projetos").style.webkitFilter = "none"
            document.getElementById("projetoss").style.opacity = "0"
        }
        function funcao5(){
            document.getElementById("GITHUB1").style.animation = "ani 1s infinite"
            document.getElementById("GITHUB2").style.animation = "ani 1s infinite"
            document.getElementById("GITHUBB").style.webkitFilter = "drop-shadow(0px 00px  1rem #0c5ef5) drop-shadow(0px 00px  1rem #0c5ef5)"
            document.getElementById("GITHUB2").style.animationDelay = "0.5s"
            document.getElementById("git").style.webkitFilter = "drop-shadow(0px 00px  1rem #0c5ef5) drop-shadow(0px 00px  1rem #0c5ef5)"
            document.getElementById("github").style.opacity = "1"
        }
        function funcao6(){
            document.getElementById("GITHUB1").style.animation = "ani 0s 0"
            document.getElementById("GITHUB2").style.animation = "ani 0s 0"
            document.getElementById("GITHUBB").style.webkitFilter = "none"
            document.getElementById("git").style.webkitFilter = "none"
            document.getElementById("github").style.opacity = "0"
        }

        function huekk(){
        x = document.getElementById("testando").scrollLeft;
        if(x > 365 && x < 500){
            document.getElementById("sobremim").style.opacity = "0";
            document.getElementById("sobremim").style.transition = "0.5s";
            document.getElementById("projetoss").style.opacity = "1";
            document.getElementById("projetoss").style.display = "block"
            document.getElementById("github").style.opacity = "0";            
        }
        if(x > 810){
            document.getElementById("github").style.display = "block"
            document.getElementById("github").style.opacity = "1";
            document.getElementById("github").style.marginLeft = "65px";
            document.getElementById("projetoss").style.opacity = "0";
            document.getElementById("projetoss").style.transition = "0.5s";
            document.getElementById("github").style.display = "block"
        }if(x < 350){
            document.getElementById("sobremim").style.opacity = "1";
            document.getElementById("projetoss").style.transition = "0.5s";
            document.getElementById("projetoss").style.opacity = "0";
            document.getElementById("sobremim").style.display = "block"
            document.getElementById("github").style.opacity = "0";       
        }
        
        }
        function ver(){
        x = event.pageX
        y = event.pageY
        huebr = x +" " + y
        document.getElementById("testar123").innerHTML = huebr
        document.getElementById("seguir").style.marginTop = y +"px"
        document.getElementById("seguir").style.marginLeft = x  +"px" 
        }