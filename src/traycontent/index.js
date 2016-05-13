import React from 'react';
import Radium from 'radium';

export default class TrayContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          visibleContent: false
        };
    }

    render() {
      //styles dropdown tray placement under appbar
      const dropdownTrayStyle = {
        position: 'absolute'
        //marginTop: '5px'
      };
      //styles tray content text & placement
      const trayItemsStyle = {
        display: 'flex',
        flexDirection: 'column',
        color: '#444444',
        position: 'relative',
        backgroundColor: '#fff'
      };
      //styles 'username' tray item
      const userNameStyle = {
        fontSize: '20px',
        fontWeight: '700',
        padding: '6px 40px 4px'
      };
      //styles 'viewprofile' list item
      const viewProfileItemStyle = {
        textDecoration: 'none',
        fontSize: '14px',
        padding: '4px 40px 6px'
      };
      //styles 'settings link' list item
      const settingsItemStyle = {
        textDecoration: 'none',
        color: '#444444',
        padding: '0px 40px 4px',
        marginTop: '6px',
        cursor: 'pointer',
        ':hover': {
          color: '#aaa'
        }
      };
      //styles 'logout' list item
      const logoutItemStyle = {
        textDecoration: 'none',
        color: '#444444',
        padding: '6px 40px 10px',
        cursor: 'pointer',
        ':hover': {
          color: '#aaa'
        }
      };

      const arrowStyleTop = {
        borderStyle: 'solid',
        position: 'absolute',
        borderColor: 'transparent transparent #fff transparent',
        borderWidth: '0px 8px 8px 8px',
        top: '0px',
        left: '20px',
        zIndex: '1'
      };

      // A simple red box fills the tray
      const content1 = (<div style={{height:'400px', backgroundColor:'red'}}></div>);


      // Content with several items.  Content can be more react components, list,
      // etc and should be implmented to be WAI-ARIA compliant

      // The contentWrap div is only here to allow for 'arrow'
      // at top of tray.  Future version can place arrow on any
      // side depending on the direction that the tray opens
      // (up/down/left/right)
      const content2 = (
                    <div className="contentWrap" style={{paddingTop:'8px'}}>
                      <span style={arrowStyleTop}></span>
                      <div className="trayItems" style={trayItemsStyle}>

                        <div key="1" style={userNameStyle}>{this.props.userName}</div>
                        <div key="2" style={viewProfileItemStyle}>View Profile</div>
                        <input key="3" placeholder="Type something" onFocus={()=>{console.log('Input has focus!!!!');}}/>
                        <div key="4" style={settingsItemStyle} >Settings</div>
                        <div key="5" style={settingsItemStyle} >Stuff</div>
                        <div key="6" style={settingsItemStyle} >Other Stuff</div>
                        <div key="7" style={logoutItemStyle} >Log out</div>
                      </div>
                    </div>
                    );

      return (
        <div key="menu" className="dropdownTray" style={dropdownTrayStyle}>
          <div className="trayContent" style={this.props.contentStyle}>
          {/* Insert the tray content here.  It should conform to accessibility requirements */}
            {content2}
          </div>
        </div>
      );
    }
}

TrayContent.propTypes = {
  contentStyle : React.PropTypes.object,
  userName : React.PropTypes.string,
  userstate : React.PropTypes.object,
  visibleContent : React.PropTypes.bool
};

export default Radium(TrayContent);
