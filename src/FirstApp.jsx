import PropTypes from "prop-types"

export const  FirstApp=({ title , subTitle , name})=> {
  return (
    <>
    <h1>{title}</h1>
    <p>{subTitle}</p>
    <p>{name}</p>
    </>
  )
}

FirstApp.PropTypes={
  title: PropTypes.string.isRequired,
  subTitle:PropTypes.string
}