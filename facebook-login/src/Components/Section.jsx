import Form from "./Form";

export default function Section() {
    return (
        <section className="h-screen w-full bg-slate-200 flex flex-col justify-center items-center ">
            <div className="w-full md:w-3/6 pb-4 px-8">
                <div className="flex flex-col justify-center items-center">
                    <img className="w-3/4 sm:w-3/6" src="assets/facebook-logo.svg" alt="Facebook Logo" />
                    <p className="text-center">Facebook helps you connect and share with the people in your life.</p>
                </div>
            </div>
            <div className="w-10/12 sm:w-1/2 md:w-1/3">
                <Form />
            </div>
        </section>
    )
}
