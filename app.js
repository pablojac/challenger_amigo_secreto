
let amigos = [];

        function agregarAmigo() {
            let amigoInput = document.getElementById('amigo').value.trim();

            if (amigoInput !== "") {
                amigos.push(amigoInput);
                console.log(amigos);
                actualizarLista();
                document.getElementById('amigo').value = ""; // Limpiar el input después de agregar
            } else {
                alert("Ingrese un nombre");
            }
        }

        function actualizarLista() {
            let ul = document.getElementById('listaAmigos');
            ul.innerHTML = ""; // Limpiar la lista antes de actualizar
            amigos.forEach(function(amigo) {
                let li = document.createElement('li');
                li.textContent = amigo;
                ul.appendChild(li);
            });
        }

        function botonAgregarAmigo(){
            agregarAmigo();
        }

        function sortearAmigo(){
            if (amigos.length === 0) {
                alert('Por favor, añade al menos un nombre a la lista.');
                return;
              }
            const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
        }