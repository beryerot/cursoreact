import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from "./itemCount"

const Item = ({ data }) => {
    return (
        <Card style={{ margin: 40 }} sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {data.login}
                </Typography>
				<CardMedia
					component='img'
					height='180'
					image={data.avatar_url}
					alt={data.login}
				/>
            </CardContent>
            <ItemCount />
        </Card>
    );
};

export default Item;