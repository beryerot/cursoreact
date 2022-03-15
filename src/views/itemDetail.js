import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import './itemDetail.css'
import ItemDetailCard from '../components/itemDetailCard';
import Spinner from '../components/spinner';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import {
	collection,
	query,
	where,
	getDocs,
	documentId,
} from 'firebase/firestore';
import { db } from '../firebase/firebaseconfig';

const ItemDetail = () => {
  	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

  	let id = useParams();
  	let itemID = id.id;

	useEffect(() => {
    
		const getItems = async () => {
			const q = query(
				collection(db, 'items'),
				where(documentId(), '==', itemID)
			);
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });

      });
			setItems(docs);
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
		};
		getItems();
	}, [itemID]);

			return (
					<div>
			
			{isLoading ? (
				<div className='spinner'>
					<Spinner />
				</div>
			) :
			
			<> {items.length === 0 
			
			? 
			
			<Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              textAlign: 'center',
              flexDirection: 'column',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
        >
          <Typography variant="overline" style={{ textAlign: "center", width:"100%"}}>No se encontró el artículo</Typography>
          <Link to="/" style={{textDecoration: 'none', margin: '0 auto', display: "flex"}}><Button >Seguí buscando productos</Button></Link> 
          </Box>
			
			:

				items.map((item) => {
					return <ItemDetailCard item={item} key={itemID}/>;
				})}
			</>
			}
		</div>
	);

};



export default ItemDetail;
