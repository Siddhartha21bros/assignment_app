import Image from 'next/image';
import '/styles/global.css';

function taglist() {
    return(
        <div>
            {['1', '2', '3'].map((path) => {
                return (
                    <div key={path}>
                        <Image src={'/${path}.jpg'} alt="pet" width='280' height='420'/>
                    </div>
                )
            }
            )}
        </div>
    )
}
    
export default taglist