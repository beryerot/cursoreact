import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Snackbar from '@mui/material/Snackbar';
import toast, { Toaster } from 'react-hot-toast';
import "./itemCount.css";


const ItemCount = ({ data, addProduct, cantidad }) => {
  const cantidadCero = () => toast.error('La cantidad no puede ser cero');
  const productoCero = () => toast.error('No es posible sumar cero unidades');
  const faltaStock = () => toast.error('La cantidad no puede ser superior al stock');
  const stockAjustado = () => toast('No hay suficiente stock. La cantidad de unidades se ajustará automáticamente al máximo disponible.');
  const productoAgregado = () => toast.success('¡Producto agregado!')
    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const newArray = cantidad.filter(function (el) {
        return el.id === data.id
      });

    const checkStock = newArray[0];
    const [counter, setCounter] = useState(1);
    
    function handlerCounterUp() {
        if (checkStock){
        checkStock.cantidad + counter < data.stock 
        ? 
        setCounter(counter + 1)
        :
            faltaStock()
        } else
        {
          counter < data.stock 
          ? 
          setCounter(counter + 1)
          :
              faltaStock()
          }
         ;
    };
    function handlerCounterDown() {
        if (counter > 1){
        setCounter(counter - 1);
        } else{
            cantidadCero()
        }
    }
    function setearTitulo(){
        
        function ajustarStock(){
        setCounter(data.stock - checkStock.cantidad)
        stockAjustado();

        }
        if (counter > 0){
        
        if (checkStock){
            checkStock.cantidad + counter > data.stock 
            ? 
            ajustarStock()
            : 
            addProduct(data.id, counter, data.price, data.title, data.image, data.stock, productoAgregado())
            } else 
            addProduct(data.id, counter, data.price, data.title, data.image, data.stock, productoAgregado())
          } else 
          productoCero()
          
          }
      
    return (
    <Stack sx={{ width: '100%', height: '100%' }} spacing={2}>
      
      <Box
      sx={{
        height: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
    <Typography variant="overline" display="block" textAlign="center">CANTIDAD: {counter} </Typography>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
    <Button onClick={handlerCounterDown}>-</Button>
    <Button onClick={handlerCounterUp}>+</Button>
      </ButtonGroup>
      <ButtonGroup display="inline">
      { counter > 0 ? <Button size="large" variant="contained" onClick={setearTitulo} endIcon={<AddShoppingCartIcon />}>COMPRAR</Button> : <Button size="large" variant="contained" onClick={setearTitulo} endIcon={<AddShoppingCartIcon />}>COMPRAR</Button>}
      </ButtonGroup>
      <Typography variant="overline" mt={2} mb={2}>Stock: {data.stock} unidades</Typography>
      
      {checkStock &&       
      <Alert severity="success" className='unidadesCarrito' sx={{ width: '50%'}}>
      Unidades en el carrito: {checkStock.cantidad}
      </Alert>}
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
      >
          <Alert  severity="warning" sx={{ width: '100%' }} >
          No hay suficiente stock. El contador se ajustará a las unidades disponibles.
  </Alert>
  </Snackbar>
  <Toaster 
  position="top-center"
  reverseOrder={false}
  />
      </Box>
      </Stack>
    )
};

export default ItemCount;