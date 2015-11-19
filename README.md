

=====================================================================================================
# Sistemas y Tecnologías Web
## Tutorial para el despliegue en iaas.ull.es
### 1. Accedso a iaas.ull.es
*
* El primer paso es acceder a iaas.ull.es,
* Hacemos click en "Portal del usuario",
* iniciamos sesión con nuestras credenciales de la ULL.

  ![media](media/media1.png)

  * En caso que estamos fuera de la red de la ULL
    * Instalaremos y configuramos el cliente VPN Global Protect para estar en la red de la ULL. | ![media](media/media4.png)
    ![media](media/media2.png)  ![media](media/media3.png)

### 3.  Configuración
* Aparecerá la máquina virtual disponible.

    ![media](media/media5.png)

  * Accederemos a "VNC modificar" y elegiremos "noVNC" para poder visualizar la terminal de la máquina en el navegador

  ![media](media/media6.png)

  * También podemos acceder por SSH mediante un cliente ssh que detallaremos los pasos más adelante.
### 5. Arrancar la maquina virtual
* Arrancamos la máquina con los credenciales (Login: usuario y contraseña: usuario)
  * Posteriormente se nos pide cambiar la contraseña una vez iniciemos por primera vez sesión.

    ![media](media/media7.png)

### 6. IP de maquina
Para ver la ip de la maquina ejecutamos el siguiente famoso comando :  

      $ ifconfig

* Que no hace falta para el acceso por SSH, pero tambien para saber la direccion del despliegue de nuestra aplicación web.

![media](media/media8.png)

### 7. Acceso por SSH
En el caso de linux y mac podemos guardar los datos de la máquina en el fichero ~/.ssh/config para no tener que recordar el hostname y el usuario para acceder.
  * consulta [ssh config simplifica nuestra vida](http://rafael.bonifaz.ec/blog/2011/01/sshconfig-simplifica-nuestra-vida-con-ssh/)

* Dentro de la red de la ULL:
    autentificarnos en acceso.ull Ejecutar el comando:

      $ ssh vpn

* Fuera de la red de la ULL:
  * Aseguramos que ya estamos conectados a la red de la ULL via VPN | ![media](media/media4.png)
  * Comprobamos que estamos autentificados en [http://acceso.ull.es](http://acceso.ull.es)

![media](media/loginUll.png)

  * Para la conección SSH en mi caso he utilizado Putty SSH Client
    * elegiendo la opción SSH
    * especificando para el login usuario@10.6.128.187

![media](media/PuttySSH.png)  ![media](media/PuttySSH2.png)  ![media](media/PuttySSH3.png)

### 8.Instalaciones necesarias
Ya la máquina tiene instalados NodeJS y git.
Pero con los siguientes comandos instalaremos desde zero todo lo que necesitamos para desplegar nuestra pagina ya que no está instalado todo lo que nos hace falta.

    $ sudo apt-get update
    $ sudo apt-get install node
    $ sudo apt-get install nodejs
    $ sudo apt-get install nodejs-legacy
    $ sudo apt-get install npm
    $ sudo apt-get install git

Para comprobar las versiones instaladas

    $ node --version
    $ nodejs --version
    $ npm --version
    $ git --version

![media](media/media10.png)

### 9. git clone
Para desplegamos la práctica anterior en esta maquina tenemos que clonar el repositorio git del proyecto para posteriormente desplegarlo en la máquina.

    $ git clone git@github.com:alu4543/STW-5.git


![media](media/media11.png)

### 10.Instalación de las dependencias
Instalamos las dependencias necesarias de nuestra aplicación, especificadas en el package.json con el comando:

    $ npm install

### 11. Arrancamos el servidor
Con el siguiente comando arrancaremos el servidor por primera ves:

    $ node static-server.js

![media](media/media12.png)

### 12. Visualizar la pagina web
La ip es la de nuestra máquina que habíamos avereguado con el comando  
El Puerto es el puerto de escucha que hemos especificado en de ficheros estáticos.

![media](media/media13.png)   ![media](media/media14.png)

### Links de la práctica:
* **Travis:** [![Build Status](https://travis-ci.org/alu4543/STW-4.svg?branch=master)](https://travis-ci.org/alu4543/STW-4)
* **[Despliegue](http://10.6.128.81:8080/index.html)**
* **[test](http://10.6.128.81:8080/vendor/test.html)**
* **[Repositorio en GitHub](https://github.com/alu4543/STW-4)**
* **Página web de la [asignatura](http://alu4543.github.io/STW-)**
