import Image from 'react-bootstrap/Image'
import sw from '../assets/img/sw-logo.png'

export default function HomePage() {

  // const sw = '../assets/img/sw-logo.png'
  
  return (
    <div>
        <h1 className="text-primary m-5">A long time ago in an API far, far away....</h1>

        <Image className="w-50 m-5" src={sw} alt="Star wars" fluid/>
    </div>
  )
}
