import React from 'react';
import TrayContent from '../traycontent/index.js';
import Radium from 'radium';

//const bellImg = require('../../images/bell-white.png');

class DropdownTray extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // trayControl style
        const trayControlStyle = {
          display: 'flex',
          alignItems: 'flex-end',
          marginRight: '18px',
          cursor: 'pointer',
          zIndex: '2',
          padding: '11px',
          backgroundColor: 'transparent'
        };

        const btnStyle = {
          position: 'absolute',
          left: '0',
          right: '0',
          top: '0',
          bottom: '2px',
          margin: '0',
          padding: '0',
          border: 'none',
          color: 'transparent',
          backgroundColor: 'transparent',
          outline: 'none',
          cursor: 'pointer',
          width: '100%'
        };

        // styles menu list dropdown, sets transition to/from off page
        const menuListStyle = {
          position: 'absolute',
          maxHeight: '100vh', // this
          width: '272px',
          top: '0px',
          overflow: 'hidden',
          opacity: '1',
          zIndex: '1',
          visibility: 'visible',
          //backgroundColor: '#ffffff',
          transition: 'max-height .4s ease-in, opacity .3s ease-in, top .2s ease-in'
        };

        const contentStyle = this.props.visibleContent ?
                          {...menuListStyle} :
                          {...menuListStyle, maxHeight: '0',
                              opacity: '0',
                              top: '-10px',
                              visibility: 'hidden',
                              transition: 'max-height .4s ease-out, opacity .4s ease-out, top .2s ease-out, visibility 1s'};

        return (
            <div style={{display:'flex', flexDirection: "column", position:"relative", zIndex: '2'}}>
              <div className="trayControl" style={trayControlStyle}>
                {/*fill the controlLable span with the icon/text that user will see */}
                <span className="controlLabel" onFocus={()=>{console.log('control button has focus');}}>Click to Toggle Tray</span>
                {/* use button for click handling and for accessibility */}
                <button onClick={()=>this.props.cbClickTrayControl()}
                    style={btnStyle}
                    aria-expanded={this.props.visibleContent? true : false}
                    >Click to toggle Tray</button>
              </div>
              <TrayContent contentStyle={contentStyle} visibleContent={this.props.visibleContent} userName={this.props.userName} userstate={this.props.userstate}/>
            </div>

        );
    }
}

DropdownTray.propTypes = {
  cbClickTrayControl : React.PropTypes.func,
  menuItems : React.PropTypes.array,
  userName : React.PropTypes.string,
  userstate : React.PropTypes.object,
  visibleContent : React.PropTypes.bool
};

export default Radium(DropdownTray);
