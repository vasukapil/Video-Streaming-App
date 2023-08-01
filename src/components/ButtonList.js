import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Watching"/>
        <Button name="Chess"/>
        <Button name="Gaming"/>
        <Button name="Live"/>
        <Button name="Sports"/>
        <Button name="Cricket"/>
        <Button name="Football"/>
        <Button name="Tenis"/>
        </div>
  )
}

export default ButtonList