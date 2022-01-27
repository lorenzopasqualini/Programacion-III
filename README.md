# Proyecto de React para Programación III

La implementación de la librería *front-end* **React** y conexión con una API conocida como [TheMovieDatabase](https://www.themoviedb.org) han sido los pilares detrás de nuestro proyecto, aplicación y repositorio. El objetivo era crear una *single-page application* (SPA) centrada en una UI que nos facilita React, pero dándole dinamismo y funcionalidades a través de una integración con el *end-point* de una API ajena, la cual nos brinda información relevante acerca de estrenos de películas.

![gif1](https://user-images.githubusercontent.com/63103853/151375939-76c014c8-00f3-4869-915c-5313a7a9be22.gif)

# Estados de componentes

Por medio del **Virtual DOM**, React es capaz de rápidas actualizaciones de sus componentes y, por ende, de la interfaz del usuario. Métodos nativos como `componentDidMount()` y `setState()` ayudaron a nuestra aplicación a cambiar, filtrar y eliminar estados de los componentes sin la necesidad de refrescar el navegador. La interacción del usuario con la página le permite cambiar los contenidos según lo que haga, por lo que su actividad termina actualizando los estados de los componentes. Al contrastar su contenido con el DOM auténtico, el **Virtual DOM** reconoce automáticamente cuando se produce un cambio y reemplaza el documento original por aquel que fue modificado.

![gif2](https://user-images.githubusercontent.com/63103853/151398639-88767d00-34d2-464b-beeb-87a4d52c1dbf.GIF)

# Estructura de componentes

Si no contamos el componente principal `App.js`, la aplicación cuenta con cinco componentes: dos *stateless* y tres *stateful*. Aquellos componentes sin estado son, dado su contenido estático de texto e imágenes, el `header` y `footer`. Por el lado de los componentes con estado, `Filtro.js` se encarga del buscador de la aplicación, permitiendo al usuario encontrar una película y filtrando sobre los resultados de la API. En cambio, `Movies.js` se ocupa de renderizar cada película en calidad de ítem individual, imprimiendo información relevante como el nombre, póster y descripción. A modo de encapsular estos componentes como una suerte de *body* entre el `header` y `footer`, se creó `Comp.js`. Este mapea la primera página de resultados de películas con los ítems que provee `Movies.js`, junto con el buscador de `Filtro.js` y las funciones de borrar o agregar películas.

![gif0](https://user-images.githubusercontent.com/63103853/151375906-c059abed-e6bb-4bf4-9d9f-2e16699b92b4.gif)

*Este proyecto es en colaboración con la [Universidad de San Andrés](https://udesa.edu.ar) y [Digital House](https://www.digitalhouse.com).*
