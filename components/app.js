let render= ReactDOM.render;
class App extends React.Component{

  constructor(props) {
    super(props);

        this.state={
      task:'',
      items:[],
      vanish:[],
      alertMessage:[]
    }
}
   //function onTaskChanged(event){} it's the same
    onTaskChanged=(event) => {
      //console.log(event);

      this.setState(
        {
          task:event.target.value
        }
      )
    }
    addTask=(event) => {
      if(this.state.task != ""){
        this.setState(
          {
            items:[...this.state.items, this.state.task],
            task:"",
            alertMessage:[...this.state.alertMessage, "hidden"]
          }
        )
      //  console.log(this.state.items);
      }
    console.log(this.state.alertMessage);
    }

 removeTask=(event) => {
      let taskID = event.target.getAttribute("item-index")
      console.log(event.target)
      let taskName=this.state.items[taskID]
      //console.log(taskName)

        this.state.vanish[taskID] = "vanish"
        this.forceUpdate()
        console.log(this.state.vanish)
        this.state.alertMessage[taskID] = "hidden"
        this.forceUpdate()
        setTimeout(function(){
          this.state.items.splice(taskID,1)
          this.setState(
            {
              items:[...this.state.items]
            }
          )
          this.state.vanish[taskID] = ""
          this.forceUpdate()

   }.bind(this),1000);

      console.log(this.state.vanish)
      //console.log(taskID)

    }
     switchDisplay=(event) =>{
       let taskID = event.target.getAttribute("item-index")
      //displayState=true;
      this.state.alertMessage[taskID] = ""
      this.forceUpdate()
      console.log(displayState);
    }
    switchDisplayToHidden=(event) =>{
      let taskID = event.target.getAttribute("item-index")
     //displayState=true;
     this.state.alertMessage[taskID] = "hidden"
     this.forceUpdate()
     console.log(displayState);
   }

  render() {
    return (
  <React.Fragment>

    <Navbar />
    <section className="section">


        <div className=" field has-addons" >
                <input className="input add-task " value={this.state.task}   onChange={this.onTaskChanged}  type="text"  />
                 <button id="animated-button" className="button  is-primary is-outlined is-inverted " onClick={this.addTask} ><span className="rotate">+</span></button>
              </div>
          <div className="level">
                 <div className="level-item">
                   <div className="panel">
                    <List alertMessage={this.state.alertMessage} vanish={this.state.vanish} onPress={this.removeTask} items={this.state.items} switch={this.switchDisplay} switchToHidden={this.switchDisplayToHidden}/>
                 </div>
               </div>
              </div>
    </section>
  </React.Fragment>
    )
  }
}
