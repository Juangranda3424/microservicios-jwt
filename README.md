# CONFIGURACIÓN DE VARIABLES DE ENTORNO PARA MICROSERVICIOS

Para configurar las variables de entorno necesarias para los microservicios, se debe crear un archivo `.env` en la raíz de cada microservicio, agregando puertos y rutas donde estaran las claves RSA. 

# INSTALACIÓN Y CONFIGURACIÓN DE MICROSERVICIOS

### Instalación de dependencias
Para instalar las dependencias necesarias para ejecutar los microservicios, se deben seguir los siguientes pasos:

1. Asegúrate de tener Node.js y npm instalados en tu sistema. Puedes descargarlo desde [Node.js](https://nodejs.org/).

```
node -v

```

2. Instala las dependencias utilizando el siguiente comando en la terminal, ubicado en la raíz de los microservicios:
```
pnpm install
```

3. Para ejecutar los microservicios, utiliza el siguiente comando en la terminal:
```
pnpm start
```


## INSTRUCCIONES PARA LA INICIALIZACIÓN DE LAS CLAVES RSA

## PARA LA INICILIZACIÓN DE LAS CLAVES RSA, SE DEBE EJECUTAR EL SIGUIENTE SCRIPT EN LA TERMINAL:

Como se muestra a continuación, el script `keypair.sh` generará un par de claves RSA (una privada y una pública) y las guardará en la carpeta `shared-keys`. Asegúrate de tener OpenSSL instalado en tu sistema para ejecutar este script correctamente.
```
bash shared-keys/keypair.sh
```