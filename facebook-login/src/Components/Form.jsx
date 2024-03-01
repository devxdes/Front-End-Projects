export default function Form() {
    return (
        <form className="flex flex-col bg-white p-4 rounded-lg gap-4 text-center shadow-2xl">
            <input className="p-2 border rounded-md outline-facebook_blue caret-facebook_blue" type="text" placeholder="Enter your Name" />
            <input className="p-2 border rounded-md  outline-facebook_blue  caret-facebook_blue" type="password" placeholder="Enter your Password" />
            <button className="bg-facebook_blue p-2 rounded-lg text-white text-bold">Log in</button>
            <a href="#" className="text-center text-facebook_blue font-normal text-sm">Forgotten Password</a>
            <hr className="text-black"/>
            <span>Or</span>
            <button className="bg-facebook_green p-2 rounded-lg text-white text-bold">Create New Account</button>
        </form>
    )
}
