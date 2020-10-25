import React from "react";

const withColorChange = (WrappedComponent, itemsArray) => {
    class WithColorChange extends React.Component{
        constructor(props){
            super(props);

            this.state = {
                count: 0,
                items: itemsArray
            }
        }

        handleCount = () =>{   
            this.state.count < 2 ?
            this.setState(prevState => {return {count: prevState.count + 1}}) :
            this.setState({count: 0})
        }

        render(){
            const {count,items} = this.state;
            return <WrappedComponent handleCount={this.handleCount} itemToRender={items[count]} {...this.props}/>
        }
    }

    return WithColorChange;
}

export default withColorChange;