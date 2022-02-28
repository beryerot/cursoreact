import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import './itemDetail.css'
import ItemDetailCard from '../components/itemDetailCard';
import Spinner from '../components/spinner'

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
			) : (
				items.map((item) => {
					return <ItemDetailCard item={item} key={itemID}/>;
				})
			)}
		</div>
	);
};

export default ItemDetail;
