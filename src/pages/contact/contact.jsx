import React from "react";
import "./contact.scss";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import FormTextarea from "../../components/form-textarea/form-textarea";
import Btn from "../../components/btn/btn";
import FormInput from "../../components/form-input/form-input";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../../layouts/header/header";

const contactSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required").nullable(),
  mail: Yup.string()
    .email("Not a valid email address")
    .required("email is required")
    .nullable(),
  message: Yup.string().required("Message is required").nullable(),
});

const Contact = () => {
  const [loading, setLoading] = React.useState(false);

  const handleContact = async (values) => {
    console.log(values);
    const { mail, message, firstName } = values;

    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://backend.getlinked.ai/hackathon/contact-form",
        {
          email: mail,
          // "phone_number":"0903322445533",
          first_name: firstName,
          message: message,
        }
      );

      if (data.email === mail) {
        toast("Form submitted");
      }

      console.log(data);
    } catch (err) {
      setLoading(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      <div className="container_box contact_box">
        <div className="contact_blur1"></div>
        <div className="contact_blur2"></div>
        <div className="contact row">
          <div className="col-12 col-lg-4 col-xl-5 contact_text">
            <h2>Get in touch</h2>

            <p>
              <span>Contact</span> <br />
              <span>Information</span>
            </p>
            <p>
              <span>27,Alara Street</span>
              <br />
              <span>Yaba 100012</span>
              <br />
              <span>Lagos State</span>
            </p>
            <p>Call Us : 07067981819</p>
            <p>
              <span>we are open from Monday-Friday</span>
              <br />
              <span>08:00am - 05:00pm</span>
            </p>

            <small>Share on</small>
            <div className="icons">
              <BsInstagram />
              {/* <FaXTwitter /> */}
              <RiTwitterXFill />
              <FaFacebookF fontSize={15} />
              {/* <BiLogoFacebook fontSize={17} /> */}
              <BiLogoLinkedin fontSize={17} />
            </div>
          </div>
          <div className="col-12 col-lg-8 col-xl-7 contact_form">
            <div className="form_container">
              <h2>
                Questions or need assistance? <br />
                Let us know about it!
              </h2>
              <Formik
                initialValues={{
                  firstName: "",
                  mail: "",
                  message: "",
                }}
                validationSchema={contactSchema}
                onSubmit={handleContact}
              >
                {({ values, errors, touched, handleChange, handleSubmit }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="formInput">
                        <FormInput
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={values.firstName}
                          isInvalid={touched.firstName && !!errors.firstName}
                          validationMessage={
                            touched.firstName && errors.firstName
                          }
                          onChange={handleChange}
                        />
                      </div>
                      <div className="formInput">
                        <FormInput
                          type="text"
                          name="mail"
                          placeholder="Mail"
                          value={values.mail}
                          isInvalid={touched.mail && !!errors.mail}
                          validationMessage={touched.mail && errors.mail}
                          onChange={handleChange}
                        />
                      </div>

                      <FormTextarea
                        type="text"
                        name="message"
                        placeholder="Message"
                        value={values.message}
                        isInvalid={touched.message && !!errors.message}
                        validationMessage={touched.message && errors.message}
                        onChange={handleChange}
                        rows={5}
                      />

                      <div className="btn">
                        <Btn loading={loading} type="submit">
                          Submit
                        </Btn>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
            <small>Share on</small>
            <div className="icons">
              <BsInstagram />
              {/* <FaXTwitter /> */}
              <RiTwitterXFill />
              <FaFacebookF fontSize={15} />
              {/* <BiLogoFacebook fontSize={17} /> */}
              <BiLogoLinkedin fontSize={17} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
