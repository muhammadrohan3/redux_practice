import React, { Component } from "react";
import { loadBugs, resolveBug, getUnresolvedBugs } from "../store/bugs";
import { connect } from "react-redux";
import StoreContext from "../contexts/storeContext";

export default class Bugs extends Component {
  static contextType = StoreContext;
  state = {bugs : []}


  componentDidMount() {
    const store = this.context
    this.unsubscribe = store.subscribe(()=>{
      const listInStore = store.getState().entities.bugs.list

      if(this.state.bugs !== listInStore) this.setState({bugs : listInStore})
    })
    console.log(this.context)
    store.dispatch(loadBugs())
  }

  componentWillUnmount()
  {
    this.unsubscribe()
  }

  render() {
    return (

      <ul>
        {this.state.bugs.map((bug) => (
          <li key={bug.id}>
            {bug.description}
          </li>
        ))}
      </ul>
    );
  }
}

// const mapStateToProps = (state) => ({
//   bugs: getUnresolvedBugs(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   loadBugs: () => dispatch(loadBugs()),
//   resolveBug: (id) => dispatch(resolveBug(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
