// <!-- start script JSnya -->
const tugasInput = document.getElementById("tugas");
const tambahButton = document.getElementById("tambahButton");
const daftarTugas = document.getElementById("daftar-tugas");

tambahButton.addEventListener("click", tambahTugas);

function tambahTugas() {
    const tugasText = tugasInput.value.trim();
    if (tugasText === "") {
        alert("Masukan List Kamu Terlebih Dahulu!");
        return;
    }

    const tugasBaru = document.createElement("p");
    tugasBaru.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    const ceklis = document.createElement("input");
    ceklis.type = "checkbox";
    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.textContent = tugasText;

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-warning", "text-white", "bi", "bi-pencil-square");
    editButton.addEventListener("click", function () {
        const tugasBaruText = prompt("Edit List Kamu", label.textContent);
        if (tugasBaruText !== null) {
            label.textContent = tugasBaruText;
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "bi", "bi-trash-fill");
    deleteButton.addEventListener("click", function () {
        const confirmDelete = confirm("Apakah kamu yakin ingin menghapus?");
        if (confirmDelete) {
            daftarTugas.removeChild(tugasBaru);
        }
    });

    tugasBaru.appendChild(ceklis);
    tugasBaru.appendChild(label);
    tugasBaru.appendChild(editButton);
    tugasBaru.appendChild(deleteButton);

    ceklis.addEventListener("change", function () {
        label.classList.toggle("text-decoration-line-through");
    });

    daftarTugas.appendChild(tugasBaru);
    tugasInput.value = "";
} 
// <!--end script JSnya -->