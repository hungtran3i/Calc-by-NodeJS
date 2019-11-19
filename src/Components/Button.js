import React, {Component} from 'react';

class Button extends Component {
    render(){
        return (
            <did className={`column-${this.props.cols}`}>
                <button className="calc-button" onClick={()=>this.props.action(this.props.symbol)}>{this.props.symbol}</button>
            </did>
        )
    }
}

export default Button;