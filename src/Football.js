import React from 'react';
import ReactDOM from 'react-dom';

class Football  extends React.Component {

    

    
   shoot(x) {

       alert (x);
  }
  render() {
      return <button onClick={() => this.shoot('ronaldo')}>ShootClick</button>
  }
}

export default Football;
//ReactDOM.render(<Football></Football>, document.getElementById('root'));