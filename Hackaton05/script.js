// Ejemplo de lista de IMEIs y números de serie reportados
const reportedIMEIs = ["123456789012345", "987654321098765"];
const reportedSerialNumbers = ["ABC123XYZ", "XYZ987ABC"];

// Lista de reparaciones
let repairs = [];

// Función para verificar si el teléfono es elegible para la reparación
function isPhoneEligible(serialNumber, imeiNumber) {
    return !reportedSerialNumbers.includes(serialNumber) && !reportedIMEIs.includes(imeiNumber);
}

// Función para agregar una reparación
function addRepair(serialNumber, imeiNumber, diagnosis) {
    const repair = {
        serialNumber,
        imeiNumber,
        diagnosis,
        status: "En revisión inicial"
    };
    repairs.push(repair);
    updateRepairStatus();
}

// Función para actualizar el estado de las reparaciones en el DOM
function updateRepairStatus() {
    const repairStatusDiv = document.getElementById("repairStatus");
    repairStatusDiv.innerHTML = '';

    repairs.forEach((repair, index) => {
        const repairDiv = document.createElement("div");
        repairDiv.innerHTML = `
            <h3>Reparación ${index + 1}</h3>
            <p>Número de Serie: ${repair.serialNumber}</p>
            <p>IMEI: ${repair.imeiNumber}</p>
            <p>Diagnóstico: ${repair.diagnosis}</p>
            <p>Estado: ${repair.status}</p>
        `;
        repairStatusDiv.appendChild(repairDiv);
    });
}

// Evento de envío del formulario
document.getElementById("repairForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const serialNumber = document.getElementById("serialNumber").value;
    const imeiNumber = document.getElementById("imeiNumber").value;
    const diagnosis = document.getElementById("diagnosis").value;

    if (!isPhoneEligible(serialNumber, imeiNumber)) {
        alert("El teléfono está reportado y no puede acceder al servicio.");
        return;
    }

    if (!document.getElementById("authorization").checked || !document.getElementById("deposit").checked) {
        alert("Debe tener la autorización del usuario y el abono del 50% para proceder.");
        return;
    }

    addRepair(serialNumber, imeiNumber, diagnosis);
    document.getElementById("repairForm").reset();
});