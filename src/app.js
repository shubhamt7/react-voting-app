console.log("react dom")
import React from 'react'
import ReactDOM from 'react-dom'

class VotingApp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h1>Vote for your favorite team</h1>
                <Team name="FC Barcelona"/>
                <Team name="Real Madrid"/>
                <Team name="FC Bayern Munich"/>
                <Team name="Liverpool"/>
            </div>
        )
    }
}

class Team extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        this.handleClick= this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            count: this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <p><strong>{this.props.name}</strong> --- Votes: {this.state.count}</p>
                <button onClick={this.handleClick}>Vote for {this.props.name}</button>
            </div>
        )
    }
}


ReactDOM.render(<VotingApp />, document.getElementById('app'))
