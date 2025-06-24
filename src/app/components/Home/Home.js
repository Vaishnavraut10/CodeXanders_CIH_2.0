import React from 'react'
import './Home.css'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter();
  return (
    <div>
    <div class="main-container">
    <div class="hero_text">
      <p>Track. Detect. <br></br>Protect your brain — one day <br></br>at a time.
</p>
<button className='track_now_btn' onClick={() => router.push('/brainTask')}>Track now</button>
    </div>
    <div class="hero_img">
      <img src="./assets/—Pngtree—innovative thinking technology brain_4522066.png" alt=""/>
    </div>
    </div>
    </div>
  )
}

export default page
