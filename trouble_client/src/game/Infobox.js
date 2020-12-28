import { Component } from 'react';
import Alert from 'react-bootstrap/esm/Alert';
import Button from 'react-bootstrap/esm/Button';



/** UI component to display a message to the user
*/
class Infobox extends Component {

    render() {
        const styles = {padding: "2px", width: this.props.width, margin: "auto", fontSize: "1rem"};
        const btnStyles = {
            marginTop: "10px"
        }
        return <div>
                <Alert variant="info" style={styles}>{this.props.msg}</Alert>
                
                {this.props.showBtn && <Button variant="primary" style={btnStyles} onClick={this.props.endTurnCallback}>End Turn</Button>}
            </div>;
    }

}

export default Infobox;