import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix, Media,
   Alert,Button, Collapse, Well,Breadcrumb,
   Badge,ButtonToolbar, Dropdown,Glyphicon,
   MenuItem,Form,FormControl,FormGroup,
  Checkbox,ControlLabel,Modal,Navbar,Nav,
  NavItem,NavDropdown,Pagination,Panel,
  PanelGroup,Popover,OverlayTrigger,
  Tabs,Tab
} from 'react-bootstrap';
//import './Gallery.css';


let active = 7;
let items = [];
for (let number = 1; number <= 10; number++) {
  items.push(
    <Pagination.Item active={number === active}>{number}</Pagination.Item>
  );
}


const popoverHoverFocus = (
  <Popover id="popover-trigger-hover-focus" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);


class Link1 extends Component {

  constructor(props) {
    
    super(props);      
      
       this.state = {
        open: false,
        open1:false,
        show: false,
        x: false
      }
  
  }

 

  closefunc = () => {  // self binding current pointer
    this.setState({show: false});  
  }  

showPOP = () => {
  this.setState({ x: true });
}


handleHide = () => {
  this.setState({ x: false });
}


 showefunc = () => {
    this.setState({show :true});

  }


  showefunc1 = () => {
    this.setState({ open: !this.state.open })

  }
  showefunc2 = () => {
    this.setState({ open1: !this.state.open1 })

  }

  
  


  render() {
    return (
      <div className="LinkPage">
        <h1>Link1 page</h1>

        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <OverlayTrigger
          trigger={['hover', 'focus']}
          placement="right"
          overlay={popoverHoverFocus}
        >
          <Button>Hover + Focus</Button>
        </OverlayTrigger>


<Grid>

        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
          <Tab eventKey={1} title="Tab 1">
            Tab 1 content
          </Tab>
          <Tab eventKey={2} title="Tab 2">
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title="Tab 3" disabled>
            Tab 3 content
          </Tab>
        </Tabs>;

        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>;

      </Grid>

      <Grid>
        <PanelGroup accordion id="accordion-example">
          <Panel eventKey="1">
            <Panel.Heading>
              <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
              richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
              dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
              moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
              assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
              wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
              butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them accusamus
              labore sustainable VHS.
            </Panel.Body>
          </Panel>
          <Panel eventKey="2">
            <Panel.Heading>
              <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
              richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
              dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
              moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
              assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
              wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
              butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them accusamus
              labore sustainable VHS.
            </Panel.Body>
          </Panel>
          <Panel eventKey="3">
            <Panel.Heading>
              <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
              richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
              dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
              moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
              assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
              wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
              butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them accusamus
              labore sustainable VHS.
            </Panel.Body>
          </Panel>
        </PanelGroup>;
        </Grid>

      <Grid>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.showPOP}
        >
          Launch contained modal
        </Button>
      <div className="modal-container" >
        

        <Modal
          show={this.state.x}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
          
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Contained Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
            ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>



      <Grid>
        <Button onClick={this.showefunc}>Show Alert(no animation)</Button>
        {
          this.state.show&&
          <Alert bsStyle="warning">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
            <Button onClick={this.closefunc}>Hide Alert</Button>
          </Alert>
        }
        </Grid>

        {/* toggle with animation */}

         <Button onClick={this.showefunc1}>
          click with animation
        </Button>        
          
         <Collapse in={this.state.open}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Well>
          </div>
        </Collapse>

        <Button bsStyle="primary" bsSize="large" onClick={this.showefunc2}>
          Launch demo modal
        </Button>

        <Collapse in={this.state.open1}>
          
          <div>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <h4>Popover in a modal</h4>
            <h4>Tooltips in a modal</h4>  

            <hr />
            <h4>Overflowing text to show scroll behavior</h4>
          </div>
        </Collapse>





        {/* breadcrumb implementation */}

        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        
        {/* dropdown menu implementation */}
        <ButtonToolbar>
         <Dropdown id="dropdown-custom-1">
            <Dropdown.Toggle>
              <Glyphicon glyph="star" />
              Pow! Zoom!
            </Dropdown.Toggle>
            <Dropdown.Menu className="super-colors">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3" active>
                Active Item
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown id="dropdown-custom-2">
            <Button bsStyle="info">mix it up style-wise</Button>
            <Dropdown.Toggle bsStyle="success" />
            <Dropdown.Menu className="super-colors">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3" active>
                Active Item
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonToolbar>

      {/* badge implementation */}
      <p>
        Badges <Badge>42</Badge>
      </p>

        {/* all button */}
      <ButtonToolbar>
        {/* Standard button */}
        <Button>Default</Button>

        {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
        <Button bsStyle="primary">Primary</Button>

        {/* Indicates a successful or positive action */}
        <Button bsStyle="success">Success</Button>

        {/* Contextual button for informational alert messages */}
        <Button bsStyle="info">Info</Button>

        {/* Indicates caution should be taken with this action */}
        <Button bsStyle="warning">Warning</Button>

        {/* Indicates a dangerous or potentially negative action */}
        <Button bsStyle="danger">Danger</Button>

        {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
        <Button bsStyle="link">Link</Button>
      </ButtonToolbar>
      <Grid>
        <Media>
          <Media.Left>
            <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
          </Media.Left>
          <Media.Body>
            <Media.Heading>Media Heading</Media.Heading>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
              fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </Media.Body>
          <Media.Right>
            <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
          </Media.Right>
        </Media>
      </Grid>
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={6}> row1 col1  </Col>
          <Col sm={6} md={6}> row1 col2 </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={6} md={6}> row2 col1  </Col>
          <Col sm={6} md={6}> row2 col2 </Col>  
        </Row>

        <Row className="show-grid">
          <Col md={6} mdPush={6}>
          left column (by push class)
          </Col>
          <Col md={6} mdPull={6}>
          right column (by pull class)
          </Col>
          <Clearfix visibleSmBlock>
            <code>&lt;{'Clearfix visibleSmBlock'} /">">">">">">">">">&gt;</code>
          </Clearfix>
          <Col md={6} mdPush={6}>
          left column (by push class)
          </Col>
          <Col md={6} mdPull={6}>
          right column (by pull class)
          </Col>
        </Row>

      

      </Grid>
      {/* form implementation */}
     
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col  sm={12}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col  sm={12}>
            <Button type="submit">Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
       
    
      </Grid>
        
      </div>
    );
  }
}

export default Link1;
