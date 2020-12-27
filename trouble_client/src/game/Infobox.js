import { Component } from 'react';
import Alert from 'react-bootstrap/esm/Alert';



/** UI component to display a message to the user
*/
class Infobox extends Component {

    render() {
        const styles = {padding: "2px", width: this.props.width, margin: "auto", fontSize: "1rem"};
        return <Alert variant="info" style={styles}>{this.props.msg}</Alert>;
    }

}

export default Infobox;