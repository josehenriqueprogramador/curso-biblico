const API = "http://localhost:8000/aulas";

if (document.getElementById("lista")) {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            const lista = document.getElementById("lista");

            data.forEach(aula => {
                lista.innerHTML += `
                    <div class="list-group-item d-flex justify-content-between">
                        <a href="aula.html?id=${aula.id}">${aula.titulo}</a>
                        <a href="${API}/download/${aula.id}" class="btn btn-sm btn-primary">Baixar</a>
                    </div>
                `;
            });
        });
}

if (document.getElementById("titulo")) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    fetch(`${API}/${id}`)
        .then(res => res.json())
        .then(aula => {
            document.getElementById("titulo").innerText = aula.titulo;
            document.getElementById("conteudo").innerText = aula.conteudo;
            document.getElementById("download").href = `${API}/download/${id}`;
        });
}
