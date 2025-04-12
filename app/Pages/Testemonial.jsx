"use client"
import React from 'react'
import { InfiniteMovingCardsDemo } from './InfiniteMovingCardsDemo'

export default function Testemonial() {
  return (
    <div className='max-w-screen-2xl mx-auto py-20'>
        <div className="font-mono text-5xl">
           <h1>What candidate say about us </h1>
        </div>
        <InfiniteMovingCardsDemo />
    </div>
  )
}
