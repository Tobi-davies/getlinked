import React from "react";
import "./register.scss";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import FormTextarea from "../../components/form-textarea/form-textarea";
import Btn from "../../components/btn/btn";
import FormInput from "../../components/form-input/form-input";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { RiDvFill, RiTwitterXFill } from "react-icons/ri";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import axios from "axios";
import { toast } from "react-toastify";
import useCategories from "../../hooks/useCategory";
import FormSelectBox from "../../components/form-selectbox/form-selectbox";
import GraphicGuy from "../../assets/images/register/graphic-guy.png";
import Walking from "../../assets/images/register/walking.png";
import SuccessModal from "../../components/success-modal/success-modal";
import Header from "../../layouts/header/header";

const registerSchema = Yup.object().shape({
  teamName: Yup.string().required("Team name is required").nullable(),
  phone: Yup.number("Phone number should be a number")
    .required("Phone number is required")
    .nullable(),
  email: Yup.string()
    .email("Not a valid email address")
    .required("email is required")
    .nullable(),
  projectTopic: Yup.string().required("Project topic is required").nullable(),
  category: Yup.string().required("Category is required").nullable(),
  groupSize: Yup.string().required("Group size is required").nullable(),
  privacyPolicy: Yup.boolean(),
});

const GroupSizeOptions = [
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 15,
    label: "15",
  },
  {
    value: 20,
    label: "20",
  },
];

const Register = () => {
  const [loading, setLoading] = React.useState(false);
  const [successModal, setSuccessModal] = React.useState(false);

  const { data: categoryData, isLoading: categoryLoading } = useCategories();
  console.log(categoryData, categoryLoading);

  const handleRegistration = async (values, { resetForm }) => {
    const {
      teamName,
      phone,
      email,
      projectTopic,
      category,
      groupSize,
      privacyPolicy,
    } = values;
    try {
      setLoading(true);
      const data = await axios.post(
        "https://backend.getlinked.ai/hackathon/registration",
        {
          email: email,
          phone_number: phone,
          team_name: teamName,
          group_size: Number(groupSize),
          project_topic: projectTopic,
          category: category,
          privacy_poclicy_accepted: privacyPolicy,
        }
      );

      if (data.status === 201) {
        setSuccessModal(true);
        resetForm({
          teamName: "",
          phone: "",
          email: "",
          projectTopic: "",
          category: "",
          groupSize: "",
          privacyPolicy: false,
        });
      }

      console.log(data, "KHGCFYUHK");
    } catch (err) {
      setLoading(true);
      console.log(err.response.data.email[0]);
      toast(err.response.data.email[0]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      <div className="container_box register_box">
        <div className="register_blur1"></div>
        <div className="register_blur2"></div>
        <div className="register row">
          <div className="col-12 col-lg-4 col-xl-5 register_image">
            <h2>Register</h2>
            <img src={GraphicGuy} alt="graphic guy" />
          </div>
          <div className="col-12 col-lg-8 col-xl-7 register_form">
            <div className="form_container">
              <h2>Register</h2>

              <div className="movement">
                <span>Be part of this movement!</span>
                <img src={Walking} alt="" walking />
              </div>

              <h3>CREATE YOUR ACCOUNT</h3>
              <Formik
                initialValues={{
                  teamName: "",
                  phone: "",
                  email: "",
                  projectTopic: "",
                  category: "",
                  groupSize: "",
                  privacyPolicy: false,
                }}
                validationSchema={registerSchema}
                onSubmit={handleRegistration}
              >
                {({ values, errors, touched, handleChange, handleSubmit }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="formInput col-12 col-sm-6">
                          <FormInput
                            label="Team's Name"
                            type="text"
                            name="teamName"
                            placeholder="Enter the name of your group"
                            value={values.teamName}
                            isInvalid={touched.teamName && !!errors.teamName}
                            validationMessage={
                              touched.teamName && errors.teamName
                            }
                            onChange={handleChange}
                          />
                        </div>
                        <div className="formInput col-12 col-sm-6">
                          <FormInput
                            label="Phone"
                            type="text"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={values.phone}
                            isInvalid={touched.phone && !!errors.phone}
                            validationMessage={touched.phone && errors.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="formInput col-12 col-sm-6">
                          <FormInput
                            label="Email"
                            type="text"
                            name="email"
                            placeholder="Enter your email address"
                            value={values.email}
                            isInvalid={touched.email && !!errors.email}
                            validationMessage={touched.email && errors.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="formInput col-12 col-sm-6">
                          <FormInput
                            label="Project Topic"
                            type="text"
                            name="projectTopic"
                            placeholder="What is your group project topic"
                            value={values.projectTopic}
                            isInvalid={
                              touched.projectTopic && !!errors.projectTopic
                            }
                            validationMessage={
                              touched.projectTopic && errors.projectTopic
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <Field name="category">
                          {({ field, form, meta }) => {
                            return (
                              <div className="col-8 col-sm-6">
                                <FormSelectBox
                                  label="Category"
                                  name={field.name}
                                  value={field.value}
                                  options={categoryData?.data.map(
                                    (category) => ({
                                      label: category.name,
                                      value: category.id,
                                    })
                                  )}
                                  placeholder="Select your category"
                                  onChange={(selected) => {
                                    form.setFieldValue(
                                      field.name,
                                      selected.value
                                    );
                                  }}
                                  isInvalid={meta.touched && !!meta.error}
                                  validationMessage={meta.touched && meta.error}
                                />
                              </div>
                            );
                          }}
                        </Field>
                        <Field name="groupSize">
                          {({ field, form, meta }) => {
                            return (
                              <div className="col-4 col-sm-6">
                                <FormSelectBox
                                  label="Group Size"
                                  name={field.name}
                                  value={field.value}
                                  options={GroupSizeOptions}
                                  placeholder="Select"
                                  onChange={(selected) => {
                                    form.setFieldValue(
                                      field.name,
                                      selected.value
                                    );
                                  }}
                                  isInvalid={meta.touched && !!meta.error}
                                  validationMessage={meta.touched && meta.error}
                                />
                              </div>
                            );
                          }}
                        </Field>
                      </div>

                      <span>
                        Please review your registration details before
                        submitting
                      </span>

                      <div className="checkbox">
                        <Field
                          name="privacyPolicy"
                          type="checkbox"
                          id="privacyPolicy"
                        />
                        <label htmlFor="privacyPolicy">
                          I agreed with the event terms and conditions and
                          privacy policy
                        </label>
                      </div>

                      <div className="btn">
                        <Btn loading={loading} type="submit" width="100%">
                          Register Now
                        </Btn>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {successModal && (
        <SuccessModal closeModal={() => setSuccessModal(false)} />
      )}
    </>
  );
};

export default Register;
