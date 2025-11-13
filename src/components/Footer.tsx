export default function Footer(){
    return(
        <footer className="bg-dark text-light fixed-bottom w-100" style={{height: 56}}>
            <div className="w-100 h-100 d-flex align-items-center justify-content-center text-center px-3">
                <small>&copy; {new Date().getFullYear()} My React Project</small>
            </div>
        </footer>
    )
}