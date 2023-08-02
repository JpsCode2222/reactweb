import React from 'react';
import Data from './components/Data.jsx';
import List from './components/List.jsx';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      Data
    }
    // console.log(this.state)
  }
  datafun(){
    this.setState({
      Data : []
    })
    console.log(this.state.Data);
  }
  render(){
    // console.log(Data);
    return(
      <>
      <h1 className='text-center text-info'>Account List</h1>
      {
        (this.state.Data.length > 0) ? 
        <>
         <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-12'>
          {
        this.state.Data.map((p,k)=>{
          const {id,name,email,img} = p;
          return(
            <>
            <List id={id} name={name} img={img} email={email}/>
            </>
          )
        })
      }
        </div>
        </div>
      </div>
      <div className="row">
            <div className="col-md-12 text-center">
                <button className='btn btn-primary' onClick={()=>this.datafun()}>Clear All</button>
            </div>
        </div>
        </> : 
        <h6 className='mt-3 p-4 text-center'>No Record Found</h6> 
      }
      </>
    )
  }
}

export default App;
