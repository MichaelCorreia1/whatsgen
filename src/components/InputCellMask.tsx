import React, { useState, useEffect, useRef } from 'react'

const InputMask = () => {
  const [card, setCard] = useState()
  const inputCard = useRef()

  // function to add phone mask
  const addMask = (e) => {
    const value = e.target.value
    const card = value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1 $2')
    setCard(card)
  }

  const maskPhone = () => {
    if (!inputCard.current) return

    inputCard.current.value = inputCard.current.value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})(\d)/, '$1-$2')
  }
  const handleChange = () => {
    // if (!inputCard.current) return
    // const cardValue = inputCard.current.value
    //   .replace(/\D/g, '')
    //   .match(/^\(\d{3}\)\s\d{3}\s-\s\d{4}/g)
    // //   .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/)
    // inputCard.current.value = !cardValue[2]
    //   ? cardValue[1]
    //   : `${cardValue[1]}-${cardValue[2]}${`${
    //       cardValue[3] ? `-${cardValue[3]}` : ''
    //     }`}${`${cardValue[4] ? `-${cardValue[4]}` : ''}`}`
    // const numbers = inputCard.current.value.replace(/(\D)/g, '')
    // setCard(numbers)
  }

  useEffect(() => {
    handleChange()
  }, [card])

  return (
    <>
      <input type="text" ref={inputCard} onChange={maskPhone} />
    </>
  )
}

export default InputMask
