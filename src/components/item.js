import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from "./itemCount"

const Item = ({ data }) => {
    return (
        <Card style={{ margin: 40 }} sx={{ height: 400, width: 300 }}>
            <CardContent>
                <Typography noWrap gutterBottom variant='h9' component='div'>
                    {data.title}
                </Typography>
				<CardMedia
					component='img'
					height='180'
					image={data.image}
					alt={data.title}
				/>
            </CardContent>
            <ItemCount />
        </Card>
    )
};

export default Item;