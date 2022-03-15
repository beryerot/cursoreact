import React, { useState, useContext } from 'react';
import { CartContext } from '../context/cartContext';

import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseconfig';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MessageSuccess from '../components/messageSuccess'; 
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const initialState = {
	nombre: '',
	email: '',
  telefono: '',
};

const Form = () => {

  const { products, totalPrice, deleteAllProducts, totalUnits } = useContext(CartContext);
	const [buyer, setBuyer] = useState(initialState);
	const [purchaseID, setPurchaseID] = useState('');
    const precio = totalPrice();
    const date = new Date();

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setBuyer({ ...buyer, [name]: value });
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'purchases'), {
			buyer, products, precio, date
		});
        await products.forEach((product) => { updateDoc(doc(db, 'items', product.id), {
            stock: product.stock-product.cantidad
            });
            })
		setPurchaseID(docRef.id);
		setBuyer(initialState);
        deleteAllProducts();
	};

	return (

    <>
                <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              textAlign: 'center',
              flexDirection: 'column',
              p: 0,
              m: 0,
            }}
        >
        {totalUnits() === 0 ? 
<Button
style={{textAlign: "center", marginLeft: "auto", marginRight: "auto", width: "100%"}}
color="primary"
variant="disabled"
>
NO HAY PRODUCTOS EN EL CARRITO</Button>
    :
    <ValidatorForm
    onSubmit={onSubmit}
    style={{marginLeft: "auto", marginRight: "auto", width: "100%"}}
>
    <TextValidator
        style={{marginLeft: "auto", marginRight: "auto", width: "240px"}}
        label="Nombre"
        onChange={handleOnChange}
        name="nombre"
        value={buyer.nombre}
        validators={['required']}
        errorMessages={['Este campo es obligatorio']}
    />
        <br />
    <TextValidator
        style={{marginLeft: "auto", marginRight: "auto", width: "240px"}}
        label="Email"
        onChange={handleOnChange}
        name="email"
        value={buyer.email}
        validators={['required', 'isEmail']}
        errorMessages={['Este campo es obligatorio', 'El email no es válido']}
    />
    <br />
    <TextValidator
        style={{marginLeft: "auto", marginRight: "auto", width: "240px"}}
        label="Telefono"
        onChange={handleOnChange}
        name="telefono"
        value={buyer.telefono}
        validators={['required', 'isNumber']}
        errorMessages={['Este campo es obligatorio', 'Solo ingresa números']}
    />
    <br />

    <Button
        style={{textAlign: "center"}}
        color="primary"
        variant="contained"
        type="submit"
        endIcon={<CheckCircleOutlineIcon />}
    >
    CONFIRMAR COMPRA
    </Button>
    
</ValidatorForm>}
{purchaseID && <MessageSuccess purchaseID={purchaseID} />}
</Box>
</>
);
};

export default Form