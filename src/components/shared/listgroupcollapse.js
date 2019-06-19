import React from 'react';
import { Collapse, Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import { Link as RRNavLink } from 'gatsby'
class ListGroupCollapse extends React.Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = { isOpen: this.props.open }
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const item = this.props.items;
        return (
            <Card style={{ marginBottom: '1rem', border:'1px solid #00944D' }}>
                <CardHeader id={item.id} style={{backgroundColor:'#00944D', color:'#FFF', cursor:'pointer'}} onClick={this.toggle}>{item.title}</CardHeader>
                <Collapse toggler={"#"+item.id} isOpen={this.state.isOpen}>
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
                </Collapse>
            </Card>
        );
    }
}

export default ListGroupCollapse;