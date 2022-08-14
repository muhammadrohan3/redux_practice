const toast = store=> next=> action=>
{
    console.log(action)
    if(action.type  === 'error')
    {
        console.log("Toast : error", action.payload.message)
    }
    else
    {
        next(action)
    }
}

export default toast