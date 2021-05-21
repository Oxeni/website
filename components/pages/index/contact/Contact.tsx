
import { Copy } from "react-feather";




const Contact = () => {

    const copyClipboard = (emailContainerElement:HTMLElement) => {
        const el = document.createElement("input") as HTMLInputElement;
        const email = emailContainerElement.querySelector("p") as HTMLElement;

        document.body.append(el);

        el.value = email.innerText;
        el.select();
        document.execCommand("copy");
        el.remove();
        email.innerText = "copied ✔"    

        setTimeout(() => {
            email.innerText = "hello@oxeni.dev"
        }, 2000);

    }


    return (
        <>
            <section className="contact">
                <div className="contact_container">


                    <div className="contact-heading">
                        <a href="mailto: hello@oxeni.dev" className="f-size-h0 f-weight-bl">contact us.</a>

                        <div className="oxeni-mail" onClick={(e) => copyClipboard(e.currentTarget)}>
                            <div className="copy">
                                <Copy size={24}/>
                            </div>
                            <p className="f-size-h6 f-weight-r">hello@oxeni.dev</p>
                        </div>
                    </div>


                    <div className="contact-pic"></div>
                </div>
            </section>
        </>
    )
}

export default Contact
