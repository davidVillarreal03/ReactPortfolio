import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='email'>
                <a href="mailto:davidvillarr3al@gmail.com">
                    <i class="fa-solid fa-envelope"></i>
                </a>   
            </div>

            <div className='gitHub'>
               <a href="https://github.com/davidVillarreal03">
               <i class="fa-brands fa-github"></i>
               </a> 
            </div>

            <div className='stack'>
               <a href="https://stackoverflow.com/users/27916696/david-villarreal">
               <i class="fa-brands fa-stack-overflow"></i>
               </a> 
            </div>
        
        </footer>

    );
}

export default Footer;