import React from 'react';
import ReactDOM from 'react-dom';
import DropdownTray from './dropdowntray/index.js';


// This is a mockup layout for demonstrating and developing
// dropdown tray animations.

// TODO - Confirm accessibility


class Demo extends React.Component {
  constructor (props){
    super(props);
    this.state = {visibleContent: false};

    this.handleClickTrayControl = this.handleClickTrayControl.bind(this);
  }

  handleClickTrayControl() {
    console.log('Toggle Tray Button Clicked');
    this.setState({...this.state, visibleContent: !this.state.visibleContent});
  }

  render() {
    const style = { width: "100%",
                    backgroundColor: "gray",
                    position:'relative',
                    zIndex: '4',
                    flex: "0 0 40px",
                    display:'flex',
                    justifyContent: 'space-between'};

      return (
      <div className="appWrapper" style={{display: "flex", flexDirection: "column"}}>
        <div className="appbar" style={style}>
          <DropdownTray   cbClickTrayControl={this.handleClickTrayControl}
                          userName="John Doe"
                          visibleContent={this.state.visibleContent}
          />
        </div>
        <div className="app2Wrapper" style={{display: 'flex' }}>
          <div className="navbar" style={{flex: '0 0 50px', backgroundColor: 'lightseagreen'}}
                onClick={()=>{console.log('nav bar clicked!!')}}
          ></div>
          <div style={{backgroundColor:"aqua", flex: "1 1 95%"}}></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('app'));
