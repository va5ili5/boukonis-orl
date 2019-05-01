import React from 'react';
import { UncontrolledCollapse, Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

class ListGroupCollapse extends React.Component {
    
    render() {
        const item = this.props.items;
        const index = this.props.index;
        return (
            <Card style={{ marginBottom: '1rem', border:'1px solid #00944D' }}>
                <CardHeader id={"toggler" + index} style={{backgroundColor:'#00944D', color:'#FFF', cursor:'pointer'}}>{item.title}</CardHeader>
                <UncontrolledCollapse toggler={"#toggler"+index}>
                        <CardBody>
                            <ListGroup>
                                {item.subservices.map((subservice, index) => {
                                    return (
                                        <ListGroupItem key={index} className="border-0">
                                            {subservice}
                                        </ListGroupItem>
                                    )
                                })}
                        </ListGroup>
                        </CardBody>
                </UncontrolledCollapse>
            </Card>
        );
    }
}

export default ListGroupCollapse;