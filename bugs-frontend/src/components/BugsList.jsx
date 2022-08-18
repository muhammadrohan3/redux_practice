import React  ,{useEffect} from 'react'
import { connect , useDispatch, useSelector} from 'react-redux'
import { getUnresolvedBugs, loadBugs, resolveBug } from '../store/bugs'

const BugsList = () => {
  const dispatch = useDispatch()
  const bugs = useSelector(getUnresolvedBugs)
  useEffect(() => {
    dispatch(loadBugs())
  }, [])
  const handleClick = (id) =>
  {
    dispatch(resolveBug(id))
  }
  return (
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.description}
            <button onClick={()=>{handleClick(bug.id)}}>Resolve</button>
          </li>
          
        ))}
      </ul>
  )
}
export default BugsList
// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(BugsList)

