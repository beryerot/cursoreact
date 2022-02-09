import React from "react";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';

function cartWidget() {
    
        return (
            <Tooltip title="Todavía no se puede comprar">
              <IconButton sx={{ p: 0 }}>
              <ShoppingCartIcon sx={{ color: grey[50], marginLeft: 2 }} />
              </IconButton>
            </Tooltip>
        )
    
  }
  
  export default cartWidget;