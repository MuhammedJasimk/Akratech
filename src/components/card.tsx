import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors'
import Button from '@mui/material/Button';


type greetProp = {
    user: {
        name: any,
        picture: any,
        location: any,
        email: any
    }

    delet:any
}



function card(props: greetProp) {
    return (
        <div>
            <Card sx={{ Width: 100 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={props?.user?.picture.large}
                    alt="Paella dish"
                    
                />
                
                 <CardHeader 
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                            {props?.user?.name.first[0]}
                        </Avatar>
                    }
                    title={props?.user?.name.first}
                    subheader={props?.user?.location.city}
                    
                />
                <CardContent sx={{ textAlign: "center", w: 100 }} >
                    <Button variant="outlined" color="error" onClick={() => props.delet(props?.user?.email)}>Delete</Button>
                </CardContent>

            </Card>
        </div>
    )
}

export default card