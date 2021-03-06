import React from 'react'
import ReactDOM from 'react-dom';
import ShQuill from '../bin/sh-quill'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reason: '<div>beginning text</div>'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            reason: `<ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
                <li>four</li>
                        </ul>`
        })
    }

    render() {
        return (
            <div className="">
                <div className="example">
                    <ShQuill className="sm" value={this.state.reason}/>
                </div>
                <button onClick={this.handleChange}>test</button>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));