import React from 'react';
import { UncontrolledCollapse, Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import { Link as RRNavLink } from 'gatsby'
class ListGroupCollapse extends React.Component {
    
    render() {
        const item = this.props.items;
        return (
            <Card style={{ marginBottom: '1rem', border:'1px solid #00944D' }}>
                <CardHeader id={item.id} style={{backgroundColor:'#00944D', color:'#FFF', cursor:'pointer'}}>{item.title}</CardHeader>
                <UncontrolledCollapse toggler={"#"+item.id}>
                        <CardBody>
                            <ListGroup>
                                {item.subservices.map((subservice, index) => {
                                    return (
                                        subservice.url === undefined ?
                                        <ListGroupItem key={index} className='border-0'>
                                            {subservice.title}
                                        </ListGroupItem>
                                        :
                                        <ListGroupItem tag={RRNavLink} to={subservice.url} key={index} className='text-underline border-0'>
                                            {subservice.title}
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