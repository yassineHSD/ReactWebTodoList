
function List (props){
  var displayState=false;
  console.log(displayState);

  return(
      props.items.map(
      (item,index) =>
      <React.Fragment>
        <div id={ (props.vanish[index] != "vanish") ? ("item"+(index % 2)) : ""} className={ (props.alertMessage[index]=="")? ("panel-block " + props.vanish[index] + " hidden"):("panel-block " + props.vanish[index])}>
        <font   >{item}</font>
        <button   id="delete-button" className="is-primary button is-outlined is-inverted delete-button "  ><span key={index} item-index={index} onClick={props.switch} className="rotate delete-span">-</span></button>
        </div>
        <div id={ ("item"+(index % 2))} >
        <div  className= {"has-text-white has-text-centered deleteAlert " + props.alertMessage[index]}>
        <p>Do ou really want to  drop {item} ? <br/> </p>
        <button   id="" className="is-primary button is-outlined is-inverted delete-button "  ><span key={index} item-index={index} onClick={props.onPress} className="scale delete-span">Yes</span></button>
        <button   id="" className="is-primary button is-outlined is-inverted delete-button "  ><span key={index} item-index={index} onClick={props.switchToHidden} className="scale delete-span">No</span></button>
        </div>
        </div>

      </React.Fragment>

    )
  )
}
