import React, { useState, useContext } from 'react';
import { CartContext } from '../context/cartContext';
// Firebase
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseconfig';

import MessageSuccess from '../components/messageSuccess'; 

import TextField from '@mui/material/TextField';

const initialState = {
	name: '',
	lastName: '',
	city: '',
};


const styles = {
	containerShop: {
		textAlign: 'center',
		paddingTop: 20,
	},
};

const Shop = () => {

    const { products, totalPrice, deleteAllProducts } = useContext(CartContext);
	const [buyer, setBuyer] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
	const [purchaseID, setPurchaseID] = useState('');
    const precio = totalPrice();
    const date = new Date();

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setBuyer({ ...buyer, [name]: value });
	};
console.log(products)
	const onSubmit = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'purchases'), {
			buyer, products, precio, date
		});
        const removeStock = await products.map((product) => { updateDoc(doc(db, 'items', product.id), {
            stock: product.stock-product.cantidad
            });
            })
		console.log('Document written with ID: ', docRef.id);
		setPurchaseID(docRef.id);
		setBuyer(initialState);
        deleteAllProducts();

	};

	return (
		<div style={styles.containerShop}>
			<h1>Shop</h1>
			<form className='FormContainer' onSubmit={onSubmit}>
				<TextField
					placeholder='Name'
					style={{ margin: 10, width: 400 }}
					value={buyer.name}
					name='name'
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Last Name'
					style={{ margin: 10, width: 400 }}
					value={buyer.lastName}
					name='lastName'
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='City'
					style={{ margin: 10, width: 400 }}
					value={buyer.city}
					name='city'
					onChange={handleOnChange}
				/>
				<button className='btnASendAction'>Send</button>
			</form>
 			{purchaseID && <MessageSuccess purchaseID={purchaseID} />}
		</div>
	);
};

export default Shop;