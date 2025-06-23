'use client';
import React from 'react'
import './page.css'
import { useRouter } from 'next/navigation'
const page = () => {
const router = useRouter();
  return (
    <div>
      <div class="main_cont">
            <p className='heading'>Cognitive Games</p>
            <p className='small_des'>Sharpen your mind with our selection of engaging cognitive exercises.</p>
            <div class="games_box">
                  <div class="box">
                        <img src="./assets/8534225.jpg" alt=""/>
                        <p className='test'>Memory Recall</p>
                        <p className='description'>Test your short-term memory by matching pairs of cards.</p>

                        <button onClick={()=>router.push('/memory')}>Play Game</button>
                  </div>
         
              
                  <div class="box">
                        <img src="./assets/yellow-triangle-warning-sign-symbol-danger-caution-risk-traffic-icon-background-3d-rendering.jpg" alt=""/>
                        <p className='test'>Attention test</p>
                        <p className='description'>Find the target symbol among distractors as quickly as possible.</p>

                        <button onClick={() => router.push('/attention')}>Play Game</button>
               
            </div>
              
                  <div class="box" id='reaction_box'>
                        <img src="./assets/—Pngtree—aerial football guard_20624649.png" alt=""/>
                        <p className='test'>Reaction Speed text</p>
                        <p className='description'>Measure your reflexes by reacting <br></br>to a visual cue.</p>

                        <button onClick={() => router.push('/reaction')}>Play Game</button>
                 
            </div>  
             </div>
      </div>5
    </div>
  )
}

export default page
