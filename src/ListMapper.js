import React from "react"

//this is a mapper it takes an array and a component and pass rest props down to the component rendered mainly for styling. The idea is to build a component library for components composes easily.

const ListMapper = (props) => {
  let { array, component: Component, ...restProps } = props
  const composer = props.array.map((item, index) => {
    console.log(props.children)
    return (
      <Component key={index} item={item} {...restProps}>
        {props.children}
      </Component>
    )
  })
  return <ul>{composer}</ul>
}

export default ListMapper
