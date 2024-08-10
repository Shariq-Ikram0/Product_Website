import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function Cards({title,desc,img,id}) {
    const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 , margin: 2}}>
      <CardMedia
        sx={{ height: 240, width: '100%'}}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title.length > 20? `${title.slice(0, 20)}...`: title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {desc.length > 100 ? `${desc.slice(0, 100)}...` : desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>navigate(`/productInfo/${id}`) }size="small">Add</Button>
        
      </CardActions>
    </Card>
  );
}
