# Burger Queen

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Enfoque de Usuario](#3-enfoque-de-usuario)
* [4. Proceso de Diseño](#4-proceso-de-diseño)
* [5. Diseño de la Interfaz](#5-diseño-de-la-interfaz)

***

## 1. Preámbulo :mag:
El 15 de mayo de 1940, hace 80 años, se abrió el primer restaurante de Hamburguesas. Desde ese momento, toda la industria de la comida rápida ha cambiado significativamente. Y a pesar de la tendencia actual a la alimentación saludable, sigue siendo muy popular, evolucionando cada vez mas a nivel Alimenticio y Tecnológico.

Es por ello que respondiendo a la solicitud de la cadena de comida **Burguer Queen** y cumpliendo con lo requerido se presenta una innovadora aplicación web que permite realizar pedidos de una forma mas rapida, sencilla y eficaz, con un excelente enlace de comunicacion entre el mesonero y la cocina.

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

## 2. Resumen del proyecto :pencil:

El producto fue desarrollado en React y le permite al restaurante mantener registros individuales de cada empleado para el inicio de sesión, estableciendo contraseñas personales creadas por un administrador. 

### Uso
⦁ Se permite al meserx incluir y excluir artículos de los pedidos que son realizados a cliente. 

⦁ Vizualizar el pedido completo, incluyendo la cantidad de artículos, el precio unitario y total.

⦁ Realizando envio del pedido, se permite que el personal de la cocina reciba todos los pedidos enviados en el salón para su preparación.

⦁ Se permite que desde cocina se de OK de la orden lista para entrega y esta sea vizualizada desde la vista del meserx.

## 3. Enfoque de Usuario :busts_in_silhouette:

| Historias de Usuarios                                                                                                                                   | Criterio de Aceptación                                                                                                                                                     | Criterios de Terminado                                                              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| **N°1** Yo como nuevo empleado (Meserx/Cocinerx), Quiero crearme una cuenta, Para ingresar a la app web                                                                 | Nuevo usuario ingrese sus datos para registrase, Inicia la interfaz, dependiendo de su rol.                                                      | El nuevo usuario puede ingresar a la aplicacion segun su rol seleccionado.             |
| **N°2** Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.                                                    | Anotar nombre de cliente, Agregar productos al pedido, Eliminar productos, Ver resumen y el total de la compra, Enviar pedido a cocina (guardar informacion en base de datos).                                                       | El usuario puede guardar informacion del cliente, incluir y eliminar productos del pedido, ver resumen y total de la compra y enviar pedido a cocina por medio del enlace con la base de datos.           |
| **N°3** Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs que un pedido está listo para servirlo a un cliente.             | Ver los pedidos ordenados según se van haciendo, Marcar los pedidos que se han preparado y están listos para servirse, Ver el tiempo que tomó preparar el pedido desde que llegó hasta que se marcó como completado.        | Se vizualizan los pedidos proximos a realizar con opciones de marcar cuales estan listos para su entrega, se muestra el tiempo de preparacion y la hora de en que fue enviadopor parte del meserx. |
| **N°4** Yo como meserx quiero ver los pedidos que están preparados para entregarlos rápidamente a los clientes que las hicieron.               | -Ver listado de pedido listos para servir, Marcar pedidos que han sido entregados.                            | El meserox puede ver los pedidos listos por cocina y marcarlos como entregados.                                    |


## 4. Proceso de Diseño (Prototipado) :pencil2::

⦁	Flujograma realizado para la organización y estructura del sitio web:

![Screenshotpaleta](src/imagen/FlujoBurger.PNG.png)

⦁	Boceto de prototipo de baja fidelidad en lápiz y papel:

![Screenshotpaleta](src/imagen/boceto.jpg)

Al realizar este primer prototipo nos enfocamos en los aspectos mas relevantes entregados por el cliente.

**Cargar Imagen prototipo en papel** 

⦁	Prototipo de Alta Fidelidad:

Una vez que concluímos nuestro protipo de baja fidelidad, consultamos con nuestros usuarios sobre el contenido y las interacciones que tendrían, y comenzamos a definir un prototipo de alta fidelidad según sus necesidades.

Utilizamos la herramienta de Figma [link](https://www.figma.com/proto/PzljuiRKFajp73psxZ6l70/Burguen-Queen?node-id=2%3A0&scaling=scale-down) generando la primera presentación visual y para que los usuarios pudieran recorrerlo con interacciones, simulando el flujo de la plataforma web.

Para organizarnos de forma óptima :bookmark_tabs: utilizamos la herramienta de Trello  [link](https://trello.com/b/V7z8l6tI/burguer-queen) acá.

## 5. Diseño de la Interfaz :computer:

⦁ Paleta de colores: 

![Screenshotpaleta](src/imagen/Paleta_de_Colores.jpg)

⦁ Interfaz:

![Screenshotpaleta](src/imagen/material.PNG)


## Autoras 
 
 💻[Genesis Astete](https://github.com/GenesisAstete)

 💻[Nadia Gallardo](https://github.com/Nadia080290)

 💻 [Paula Valdez](https://github.com/pmvaldez)
