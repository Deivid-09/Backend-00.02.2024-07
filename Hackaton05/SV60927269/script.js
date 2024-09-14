class Telefono {
    constructor(numeroSerie, imei) {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.diagnostico = null;
        this.estado = 'No revisado';
    }

    esElegible(reportedIMEIs, reportedSerialNumbers) {
        return !reportedIMEIs.includes(this.imei) && !reportedSerialNumbers.includes(this.numeroSerie);
    }
//mitad
    asignarDiagnostico(diagnostico) {
        this.diagnostico = diagnostico;
        this.estado = 'Diagnóstico completado';
    }
}
class Tecnico {
    constructor(nombre, skills) {
        this.nombre = nombre;
        this.skills = skills; // Array de marcas en las que es experto
    }

    esAptoPara(telefonoMarca) {
        return this.skills.includes(telefonoMarca);
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
}

const reportedIMEIs = ["123456789012345", "987654321098765"];
const reportedSerialNumbers = ["ABC123XYZ", "XYZ987ABC"];

const telefono = new Telefono('ABC123XYZ', '123456789012346');
const tecnico = new Tecnico('Juan Pérez', ['Samsung', 'Apple']);

if (telefono.esElegible(reportedIMEIs, reportedSerialNumbers)) {
    telefono.asignarDiagnostico('Pantalla rota');
    
    const reparacion = new Reparacion(telefono, true, 60);
    try {
        reparacion.autorizarReparacion();
        if (tecnico.esAptoPara('Samsung')) {
            reparacion.asignarTecnico(tecnico);
            reparacion.agregarRepuesto('Pantalla Samsung');
            reparacion.actualizarEstado('Reparación en proceso');
        }
    } catch (error) {
        console.error(error.message);
    }
    
    console.log(reparacion);
} else {
    console.log('El teléfono está reportado y no puede acceder al servicio.');
}