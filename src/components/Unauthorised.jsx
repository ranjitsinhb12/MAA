import {useNavigate} from 'react-router-dom'

function Unauthorised() {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    return (
        <section>
            <h1>Unauthorised!</h1>
            <br />
            <p>You do not have access to requested page</p>
            <div className=' flex-grow'>
                <button onClick={goBack}> Go Back </button>
            </div>
        </section>
    )
}

export default Unauthorised
