export default (props:
  { 
    children: any,
      render: boolean
  }) => {
  if(props.render){
    return props.children
  }else{
    return <></>
  }
}
