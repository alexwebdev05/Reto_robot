# Crea la api para poder hacer que se mueva por web
from flask import Flask, jsonify
import subprocess
from alante import mover_servos, parar

app = Flask(__name__)

@app.route('/alante', methods=['GET'])
def iniciar_movimiento():
    try:
        # Llamar a la función mover_servos para controlar los servos
        mover_servos()

        # Devolver una respuesta JSON indicando éxito
        return jsonify({'mensaje': 'Movimiento de servos iniciado correctamente'}), 200

    except Exception as e:
        # Devolver un mensaje de error si ocurre alguna excepción
        return jsonify({'error': str(e)}), 500

@app.route('/parar', methods=['GET'])
def detener_movimiento():
    try:
        # Llamar a la función parar para detener los servos
        parar()

        # Devolver una respuesta JSON indicando éxito
        return jsonify({'mensaje': 'Movimiento de servos detenido correctamente'}), 200

    except Exception as e:
        # Devolver un mensaje de error si ocurre alguna excepción
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    # Ejecutar el comando sudo pigpiod antes de iniciar el servidor
    subprocess.run(['sudo', 'pigpiod'])

    # Hacer que el servidor esté disponible en la red local
    app.run(debug=True, host='0.0.0.0')
