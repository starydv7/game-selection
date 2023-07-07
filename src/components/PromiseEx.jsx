import React from 'react'

const PromiseEx = () => {
    const mypromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 10);
            if (randomNum > 5) {
                resolve(`Success Random Number:${randomNum}`)
            }
            else {
                reject(`Error! Random Number:${randomNum}`)
            }
        }, 1000);
    })
  return (
    <div>PromiseEx</div>
  )
}

export default PromiseEx