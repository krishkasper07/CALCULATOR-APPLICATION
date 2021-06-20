import { connect } from "react-redux";
function Screen(props) {
       console.log(props)
        return ( <>
        <div className="screen">
              {props.randomExpression}
              </div>
        </> );
}
 function mapStateToProps(store){
     // make it has a prop in screen component
       return{
           randomExpression: store.expression
         }
 }
export default connect(mapStateToProps)(Screen);