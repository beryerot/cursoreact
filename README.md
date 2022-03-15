El presente proyecto es una ecommerce de obras de arte. Está creado en React JS con Material UI y React Router DOM. 

La aplicación llama a una api creada en Firebase. Desde allí descarga las fichas de producto (title, price, stock, description, image, category). Las sección de categorías está armada en función de los valores que tiene el campo "category" en el array de productos para que se actualice automáticamente. 

En el momento de hacer una compra graba en la misma API la información de la compra (con los datos del comprador que se informan a través de un formulario) y actualiza el stock de los productos vendidos. Cuando el stock de un producto llega a cero automáticamente deja de mostrarse. 

El itemCount está parametrizado para no permitir cantidades menores a 1 o superiores al stock del producto.

El carrito permite eliminar productos de a uno o vaciarlo. 

Se utilizó react-material-ui-form-validator para contorlar el formulario de checkout. Se incorporó toast para gestionar las alertas y mensajes.

En la carpeta recursos hay un video con el flow del ecommerce y su proceso de compra. 