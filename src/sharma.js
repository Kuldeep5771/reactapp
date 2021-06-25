import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';





function Sharma(props)  {
    return (
        
        

         
              
                   <Card >
                           <Card.Img variant="top" src={props.img}/>
                               <Card.Body>
                                   <Card.Title>{props.title}</Card.Title>
                                     <Card.Text> {props.pack} </Card.Text>
                                     <Card.Text>  <b>MRP {props.mrp} </b> </Card.Text>
                                   <Card.Text><b>Offer {props.offer}</b> </Card.Text> 
                          
                            
                                </Card.Body>
                        <Card.Footer>
                             <Button variant="primary">Go somewhere</Button>
                        </Card.Footer>
                       
                    </Card>
                
  
    
    );
}

export default Sharma;