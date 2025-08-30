import React from "react";
import { Button, Icon, Input, Label } from "semantic-ui-react";
import Swal from "sweetalert2";
const ContactMe = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8a73cfa1-2f39-4517-8318-d31f19bf50ae");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      Swal.fire({
        title: "Great!",
        text: "Message sent successfully",
        icon: "success",
      });
    }
  };
  return (
    <>
      <div className="bg-gradient-to-b from-neutral-950 from-via-neutral-800 to-neutral-700 text-white h-full p-6 items-center justify-center font-mono" >
        <h2 className="underline underline-offset-4 font-mono"> For Contact</h2>

        <div className="md:ml-20 md:flex md:flex-row flex-col justify-center text-center md:w-11/12 h-screen w-full ">
          <div className="flex flex-col w-1/2 justify-center text-center h-1/2 md:border-e-2 border-y-0 border-white ">
            <div className="ml-10 md:h-16 h-10 bg-neutral-600 p-2 md:p-4 w-max m-6 md:m-auto rounded shadow-lg">
              <p>
                <Icon name="phone" />
                +91 8419966563
              </p>
            </div>
            <div className="ml-10 h-16 bg-neutral-600 w-max md:m-auto p-4 rounded shadow-lg">
              <p>
                <Icon name="mail" />
                siddharthshinde2002@gmail.com
              </p>
            </div>
            <div className="ml-10 mt-6 h-16 bg-neutral-600 md:m-auto w-max p-4 rounded shadow-lg">
              <p>
                <Icon name="address book" />
                kalyan, Maharashtra, India
              </p>
            </div>
          </div>
          <div className=" md:w-1/2 text-center p-6 h-2/3 ">
            <form className="md:space-y-10" onSubmit={onSubmit}>
              <div className="space-x-6 p-2 flex md:flex-row">
                <Label className="md:w-28 shadow-lg" color="teal">
                  Name
                </Label>
                <Input
                  type="text"
                  placeholder="enter your name"
                  size="small"
                  className="md:w-1/2 shadow-lg"
                  name="name"
                />
              </div>
              <div className="space-x-6 p-2 flex md:flex-row">
                <Label className="md:w-28 shadow-lg" color="teal">
                  Email
                </Label>
                <Input
                  type="email"
                  placeholder="enter your email"
                  className="md:w-1/2 shadow-lg"
                  name="email"
                />
              </div>
              <div className="flex space-x-3 p-2 ">
                <Label className="md:w-28 h-10 shadow-lg" color="teal">
                  Message
                </Label>
                <textarea
                  placeholder="Type your message"
                  className="textarea1 p-4 text-black shadow-lg rounded "
                  name="message"
                />
              </div>
              <div className="space-x-6 m-4">
                <Button
                  className="md:w-1/4 w-28 shadow-lg rounded-xl"
                  inverted
                  color="teal"
                  type="submit"
                  size="small"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
