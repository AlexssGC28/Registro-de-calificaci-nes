
        function calcular() {
            let c1 = Number(document.getElementById("calif1").value);
            let c2 = Number(document.getElementById("calif2").value);
            let c3 = Number(document.getElementById("calif3").value);
            let c4 = Number(document.getElementById("calif4").value);
            let c5 = Number(document.getElementById("calif5").value);

            let suma = c1 + c2 + c3 + c4 + c5;
            let promedio = suma / 5;

            document.getElementById("resultado").innerHTML = "Promedio: " + promedio;
        }