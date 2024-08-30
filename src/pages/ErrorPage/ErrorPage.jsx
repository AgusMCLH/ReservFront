import './css/style.css';
const ErrorPage = () => {
    return (
        <div className='ErrorPageConatainer'>
        
            <div className="text"><p>500</p></div>
            <div className="container">

            <div className="caveman">
                <div className="leg">
                <div className="foot"><div className="fingers"></div></div>      
                </div>
                <div className="leg">
                <div className="foot"><div className="fingers"></div></div>      
                </div>
                <div className="shape">
                <div className="circle"></div>
                <div className="circle"></div>
                </div>
                <div className="head">
                <div className="eye"><div className="nose"></div></div>
                <div className="mouth"></div>
                </div>
                <div className="arm-right"><div className="club"></div></div>    
            </div>

            <div className="caveman">
                <div className="leg">
                <div className="foot"><div className="fingers"></div></div>      
                </div>
                <div className="leg">
                <div className="foot"><div className="fingers"></div></div>      
                </div>
                <div className="shape">
                <div className="circle"></div>
                <div className="circle"></div>
                </div>
                <div className="head">
                <div className="eye"><div className="nose"></div></div>
                <div className="mouth"></div>
                </div>
                <div className="arm-right"><div className="club"></div></div>    
            </div>
            </div>
                <p className='aditionalText-1'>Internal Server Error</p>
                <p className='aditionalText-2'>Uhg, no deberías estar viendo esto.<br/>Tenemos un equipo de cavernicolas altamente capacitados para resolver este problema, comunicate con nosotros!<br/> <span>Reserv</span>.</p>
        </div>
    );
    }

export default ErrorPage;