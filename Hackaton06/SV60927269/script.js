class Telefono {
    constructor(numeroSerie, imei) {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.diagnostico = '';
        this.estado = 'No revisado';
    }

    esElegible(reportedIMEIs, reportedSerialNumbers) {
        return !reportedIMEIs.includes(this.imei) && !reportedSerialNumbers.includes(this.numeroSerie);
    }

    asignarDiagnostico(diagnostico) {
        this.diagnostico = diagnostico;
        this.estado = 'Diagnóstico completado';
    }

    actualizarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }
}

class Reparacion {
    constructor(telefono, usuarioAutorizado, abono) {
        this.telefono = telefono;
        this.usuarioAutorizado = usuarioAutorizado;
        this.abono = abono;
        this.repuestos = [];
        this.tecnico = null;
        this.estado = 'Pendiente de autorización';
    }

    autorizarReparacion() {
        if (this.usuarioAutorizado && this.abono >= 50) {
            this.estado = 'Autorizado para reparación';
        } else {
            throw new Error('No se puede autorizar la reparación sin el abono del 50% y la autorización del usuario.');
        }
    }

    asignarTecnico(tecnico) {
        this.tecnico = tecnico;
        this.estado = 'Asignado a técnico';
    }

    agregarRepuesto(repuesto) {
        this.repuestos.push(repuesto);
    }

    actualizarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }

    guardarEnStorage() {
        localStorage.setItem(this.telefono.numeroSerie, JSON.stringify(this));
    }

    static cargarDeStorage(numeroSerie) {
        const data = localStorage.getItem(numeroSerie);
        if (data) {
            const obj = JSON.parse(data);
            return Object.assign(new Reparacion(), obj);
        }
        return null;
    }
}

// Gestión del Flujo de Trabajo y WebStorage

// Ejemplo de datos reportados
const reportedIMEIs = ["123456789012345", "987654321098765"];
const reportedSerialNumbers = ["ABC123XYZ", "XYZ987ABC"];

// Simulación de botones y flujo de trabajo
document.getElementById('agregar-telefono-btn').addEventListener('click', () => {
    const telefono = new Telefono('ABC123XYZ', '123456789012346');

    if (telefono.esElegible(reportedIMEIs, reportedSerialNumbers)) {
        telefono.asignarDiagnostico('Pantalla rota');

        const reparacion = new Reparacion(telefono, true, 60);
        try {
            reparacion.autorizarReparacion();
            reparacion.guardarEnStorage();
            Swal.fire('Éxito', 'Teléfono agregado y reparación autorizada', 'success');
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
        }
    } else {
        Swal.fire('Error', 'El teléfono está reportado y no puede acceder al servicio.', 'error');
    }
});

document.getElementById('actualizar-estado-btn').addEventListener('click', () => {
    const reparacion = Reparacion.cargarDeStorage('ABC123XYZ');
    if (reparacion) {
        reparacion.actualizarEstado('Reparación en proceso');
        reparacion.guardarEnStorage();
        document.getElementById('estado-message').textContent = `Estado actualizado: ${reparacion.estado}`;
    } else {
        Swal.fire('Error', 'Reparación no encontrada', 'error');
    }
});