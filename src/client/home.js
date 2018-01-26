import React,{ Component } from 'react';
class Home extends Component{
    constructor(props){
        super(props);
    };
    render(){
        const styles={
            width:'100%',
            height:'100%',
            backgroundColor:'#fff'
        }
        return (
            <div style={styles}>默认显示内容盒子</div>
        )
    }
}
export default Home;