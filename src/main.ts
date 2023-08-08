type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
    id: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    temperatura: number;
    frecuenciaCardiaca: number;
    especialidad: Especialidad;
    edad: number;
}

const pacientes: Pacientes[] = [
    {
        id: 1,
        nombre: "John",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 80,
        especialidad: "Medico de familia",
        edad: 44,
    },
    {
        id: 2,
        nombre: "Jane",
        apellidos: "Doe",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 70,
        especialidad: "Medico de familia",
        edad: 43,
    },
    {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
    },
    {
        id: 4,
        nombre: "Mary",
        apellidos: "Wien",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 120,
        especialidad: "Medico de familia",
        edad: 20,
    },
    {
        id: 5,
        nombre: "Scarlett",
        apellidos: "Somez",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 110,
        especialidad: "Cardiólogo",
        edad: 30,
    },
    {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 11,
    },
];

// 1. Extraer la lista de paciente que están asignados a la especialidad de Pediatría
const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    const pacientesPediatria: Pacientes[] = []
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === 'Pediatra') {
            pacientesPediatria.push(pacientes[i])
        }
    }
    return pacientesPediatria
};
console.log(obtenPacientesAsignadosAPediatria(pacientes))

// 2. Extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAños = (pacientes: Pacientes[]): Pacientes[] => {
    const pacientesPediatriaMenoresDiez: Pacientes[] = []
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad && pacientes[i].edad < 10) {
            pacientesPediatriaMenoresDiez.push(pacientes[i])
        }
    }
    return pacientesPediatriaMenoresDiez
};
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAños(pacientes))

// 3. Activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProtocolo = false;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].frecuenciaCardiaca > 100 || pacientes[i].temperatura > 39) {
            activarProtocolo = true
        }
    }
    return activarProtocolo
};
console.log('El protocolo de urgencia está en:', activarProtocoloUrgencia(pacientes))

// 4. Reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia
const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
): Pacientes[] => {
    const pacientesActualizados: Pacientes[] = []
    for (let i = 0; i < pacientes.length; i++) {
        const paciente = { ...pacientes[i] }
        if (paciente.especialidad === 'Pediatra') {
            paciente.especialidad = 'Medico de familia'
        }
        pacientesActualizados.push(paciente)
    }
    return pacientesActualizados
};
console.log(reasignaPacientesAMedicoFamilia(pacientes))

// 5. Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría
const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let pediatraEnCasa = true
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === 'Pediatra') {
            pediatraEnCasa = false
        }
    }
    return pediatraEnCasa
};
console.log('La petición de enviar al pediatra a casa es:', hayPacientesDePediatria(pacientes))

// 6. Calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología
interface numeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
): numeroPacientesPorEspecialidad => {
    let contador: numeroPacientesPorEspecialidad = {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0
    }
    for (let i = 0; i < pacientes.length; i++) {
        const especialidad = pacientes[i].especialidad
        if (especialidad === 'Medico de familia') {
            contador.medicoDeFamilia++
        }
        if (especialidad === 'Pediatra') {
            contador.pediatria++
        }
        if (especialidad === 'Cardiólogo') {
            contador.cardiologia++
        }
    }
    return contador
};
console.log('El número total de pacientes asignados por especialidad es:', cuentaPacientesPorEspecialidad(pacientes))
