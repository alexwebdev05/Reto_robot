# Este archivo hace dos funciones las cuales hacen que el perro se mueva o se pare
from gpiozero import AngularServo
from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep
import subprocess

# Variable global para controlar si los servos están en movimiento
servos_en_movimiento = False

def parar():
    global servos_en_movimiento
    # Cambiar el valor de la variable para indicar que los servos están detenidos
    servos_en_movimiento = False
    # Ejecutar el comando para detener pigpiod
    # subprocess.run(['sudo', 'killall', 'pigpiod'])

def mover_servos():
    global servos_en_movimiento
    if not servos_en_movimiento:  # Verificar si los servos ya están en movimiento
        
        servos_en_movimiento = True  # Cambiar el estado a "en movimiento"
        factory = PiGPIOFactory()

        # Define los 8 servos, cada uno con un pin diferente
        TraseroDerecha = AngularServo(18, min_pulse_width=0.0006, max_pulse_width=0.0023, pin_factory=factory)
        DelanteroIzquierda = AngularServo(21, min_pulse_width=0.0006, max_pulse_width=0.0015, pin_factory=factory)
        TraseroIzquierda = AngularServo(19, min_pulse_width=0.0006, max_pulse_width=0.0010, pin_factory=factory)
        DelanteroDerecha = AngularServo(20, min_pulse_width=0.0006, max_pulse_width=0.0017, pin_factory=factory)
        TDelanteroIzquierda = AngularServo(14, min_pulse_width=0.0006, max_pulse_width=0.0030, pin_factory=factory)
        TTraseroIzquierdo = AngularServo(23, min_pulse_width=0.0006, max_pulse_width=0.0030, pin_factory=factory)
        TTraseroDerecho = AngularServo(24, min_pulse_width=0.0006, max_pulse_width=0.0050, pin_factory=factory)
        TDelanteroDerecho = AngularServo(25, min_pulse_width=0.0006, max_pulse_width=0.0015, pin_factory=factory)

        while servos_en_movimiento:  # Condición de bucle controlada por la variable global
            # Mueve los primeros cuatro servos al mismo tiempo
            TraseroDerecha.angle = -20
            DelanteroIzquierda.angle = 35
            TraseroIzquierda.angle = -90
            DelanteroDerecha.angle = 40
            sleep(0.5)

            # Mueve el quinto servo
            DelanteroDerecha.angle = -40
            TraseroIzquierda.angle = 70
            sleep(0.5)

            # Mueve los servos 4 y 2
            DelanteroIzquierda.angle = -30
            TraseroDerecha.angle = 10
            sleep(0.5)

        # Cuando se sale del bucle, los servos han sido detenidos
        servos_en_movimiento = False

if __name__ == "__main__":
    # Si el script se ejecuta directamente, llama a mover_servos
    mover_servos()
