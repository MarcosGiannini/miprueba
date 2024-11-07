🌟 Apuntes sobre Grid I - Parte 1
🗂️ 1. Grid Container (Contenedor de Grid)
El Grid Container es el elemento al que aplicamos display: grid; y que contiene los elementos hijos que se organizarán en una cuadrícula.

🔹 Ejemplo para niños: Imagina que tienes una hoja cuadriculada y decides que tus juguetes se van a colocar en cada cuadrado de la hoja.

.contenedor-grid {
  display: grid;
  grid-template-columns: 100px 100px 100px; /* Tres columnas de 100px cada una */
  grid-template-rows: 100px 100px; /* Dos filas de 100px cada una */
}

🧱 2. Grid Line (Líneas de la Cuadrícula)
Las grid lines son las líneas que dividen las columnas y filas en un contenedor de grid. Estas líneas ayudan a posicionar y organizar los elementos.

🔹 Ejemplo visual para niños: Piensa en las líneas que dividen las casillas en una hoja de cuadros.

📦 3. Grid Cell (Celda de la Cuadrícula)
Una grid cell es una sola casilla en la cuadrícula, donde se colocan los elementos. Es la unidad más pequeña en un grid.

🔹 Ejemplo para niños: Es como colocar un juguete en una sola casilla de la hoja cuadriculada.

🏠 4. Grid Area (Área de la Cuadrícula)
Una grid area es un espacio que abarca varias celdas y se usa para agrupar elementos o posicionarlos.

🔹 Ejemplo para niños: Imagina que juntas cuatro casillas para colocar un juguete más grande.   
.elemento {
  grid-area: 1 / 1 / 3 / 3; /* Ocupa desde la fila 1 a la 3 y la columna 1 a la 3 */
}

📏 5. Grid Track (Pista de la Cuadrícula)
Un grid track es el espacio entre dos grid lines, formando una fila o una columna.

🔹 Ejemplo para niños: Es como una fila completa de casillas en tu hoja cuadriculada.

➖ 6. Grid Gap (Espacio entre Celdas)
El grid gap define el espacio entre las celdas de la cuadrícula. Puede usarse gap, row-gap o column-gap.

🔹 Ejemplo para niños: Piensa en dejar un pequeño espacio entre tus juguetes para que no se toquen.   

.contenedor-grid {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px;
  gap: 10px; /* Espacio de 10px entre las celdas */
}

🔑 Resumen para Recordar
Grid Container: El elemento principal con display: grid.
Grid Line: Las líneas que dividen columnas y filas.
Grid Cell: La unidad más pequeña de la cuadrícula.
Grid Area: Espacio que abarca varias celdas.
Grid Track: Una fila o columna completa.
Grid Gap: Espacio entre las celdas.