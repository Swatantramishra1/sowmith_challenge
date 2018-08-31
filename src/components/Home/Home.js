import React from 'react';
import { connect } from 'react-redux';
import HomeWrapper from './Home.style';
import { setTextValue } from '../../redux/actions/Home/HomeActions';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.props.setTextValue(value);
    }

    render() {
        console.log(this.props);
        return (
            <HomeWrapper>
                <div className="flex home-container">
                  <input type="text" className="input_text" placeholder="Enter Text Here" onChange={(e) => this.onChange(e.target.value)} />
                  <hr className="hr-data" />
                  <h4 className="hr-data" >Entered Text</h4>
                  <input type="text" className="input_text" placeholder="There is no text to show" value={this.props.HOMEREDUCER.text_value} />
                </div>
            </HomeWrapper>
        )
    }
}

function mapToStateProps(state) {
    return state;
}

const mapDispatchToProps = {
    setTextValue
}

export default connect(mapToStateProps, mapDispatchToProps)(Home);