import React, { Component } from 'react'
import {Carousel} from '3d-react-carousal';
import {Button} from 'react-bootstrap';
import MyVerticallyCenteredModal from '../Modal'
import 'font-awesome/css/font-awesome.css'
export default class ProjectCarousal extends Component {
    constructor(props) {
        super();
        this.state = {
            modalShow: false,
            title:'nerd'
        };
      }
  
    render() {
   
    let slides = [
        // nerd---------------------------------
        <div className='ProCluster' >
        <div className='proImage nerd' >
        <div className='clusterTitle' >NerdVerse (Trivia)</div>
        <Button variant="warning" className='probutton nerdButton'
            onClick={() =>{ 
                this.setState({title: 'nerdverse'});
            this.setState({modalShow: true});
            }}>
            Take a look
        </Button>
        </div>
        </div>    ,
        // sloshed-------------------------
      <div className='ProCluster pcRight' >
      <div className='proImage sloshed'>
      <div className='clusterTitle' >(Pub Locator App)</div>
      <div id='sloshed' >The Sloshed Guide</div> 
      <Button variant="warning" className='probutton nerdButton'
            onClick={() =>{ 
                this.setState({title: 'sloshed'});
            this.setState({modalShow: true});
            }}>
            Take a look
        </Button>
      </div>
      </div>,
    //   burger-------------------
      <div className='ProCluster  ' >
      <div className='proImage burger'>
      <div className='clusterTitle' >(Make a burger)</div>
      <Button variant="warning" className='probutton nerdButton'
            onClick={() =>{ 
                this.setState({title: 'burger'});
            this.setState({modalShow: true});
            }}>
            Take a look
        </Button>
      </div>
      </div>,
        //   emp-------------------
        <div className='ProCluster  ' >
        <div className='proImage emp'>
        <div className='clusterTitle' >(Employee Directory)</div>
        <div id='emp'>Emp List</div>
        <Button variant="warning" className='probutton nerdButton'
            onClick={() =>{ 
                this.setState({title: 'emp'});
            this.setState({modalShow: true});
            }}>
            Take a look
        </Button>
        </div>
        </div>,
         ];
    return (
      <div style={{width:'100%'}}>
           <MyVerticallyCenteredModal
                    title={this.state.title}
                    show={this.state.modalShow}
                    onHide={() => 
                        this.setState({modalShow: false})} />
          
        <Carousel slides={slides} autoplay={true} interval={3000}/>
      </div>
    )
  }
}