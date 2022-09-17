import { FC} from 'react';



const Footer: FC = () => {
    return (
        <footer className="p-4 shadow md:p-6" style={{
            backgroundColor: '#aa051b',
            background: 'linear-gradient(90deg, rgba(255,0,104,1) 0%, #2b879e 100%)',
            boxShadow: '1px 3px 30px 0px rgba(50, 50, 50, 0.75)'
        }}>
            <div className="text-center p-4">
                © 2022 Copyright:<br></br>
                <a className="text-white" href="https://github.com/Maksikos-ctrl">Maksikos-ctrl</a>
            </div>
            
        </footer>
    )
}

export default Footer;