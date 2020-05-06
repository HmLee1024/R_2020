import React from 'react';
import './clock.css'


class Clock extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        time: new Date(),
       stoplist: []
    }
}

componentDidMount(){
    this.interval = setInterval(()=>{
        this.setState({
        time: new Date()
        })
    }, 100)
}

stopEventlistner(){
    // 이 방식은 사용 안함
    /*const {stoplist} = this.state;
   stoplist.push("test");
   
   this.setState({ //값을 반영하는 방법
       stoplist: stoplist
   })*/ 
   
   // 가능하다면 concat으로 처리하는 방식을 선호
   const {stoplist} = this.state;
   
    this.setState({ //값을 반영하는 방법
       stoplist: this.state.stoplist.concat(this.state.time)
   })
}

render() {
   const { time } = this.state;
   const { color } = this.props; 

   const yy = time.getFullYear();
   const mm = time.getMonth();
   const dd = time.getDate();
   const h = time.getHours();
   const m = time.getMinutes();
   const s = time.getSeconds();
   const ms = time.getMilliseconds();

   return (
    <div className="clockBox" id="font" style={{ color }}>
        <div>
            <div className="date">{yy}년 {mm+1}월 {dd}일</div>
            <span className="time">{h}:{m}:{s}</span><span className="ms">:{ms}</span>
        </div>
    </div>
    )
}
}

export default Clock;