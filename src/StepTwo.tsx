import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import Button from "./components/Button";
import PageCard from "./components/PageCard";
import * as Yup from "yup";
import { Formik, Form, FormikProps, FormikValues } from "formik";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import axios from "axios";
import InputField from "./components/InputField";
import { FadeLoader } from "react-spinners";
interface StepTwoProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const StepTwo = ({ step, setStep }: StepTwoProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const imageUploadRef = useRef<HTMLInputElement>(null);
  const formikRef = useRef<FormikProps<FormikValues>>(null);
  const [uploading, setUploading] = useState(false);
  const getInitialValues = () => {
    return {
      image: sessionStorage.getItem("image") || "",
      name: sessionStorage.getItem("name") || "",
      email: sessionStorage.getItem("email") || "",
      request: sessionStorage.getItem("request") || "",
    };
  };
  const [initialValues, setInitialValues] = useState(getInitialValues());
  useEffect(() => {
    setInitialValues(getInitialValues());

    const storedImage = sessionStorage.getItem("image");
    setImageUrl(storedImage || null);
  }, []);
  const handleImageUpload = async () => {
    const file = imageUploadRef.current?.files?.[0];
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "event-ticket-generator");
      data.append("cloud_name", "dkkx4a2x5");
      setUploading(true);
      try {
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dkkx4a2x5/image/upload",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setImageUrl(res.data.url);
        sessionStorage.setItem("image", res.data.url);
        formikRef.current?.setFieldValue("image", res.data.url);
      } catch (error) {
        console.log(error);
      } finally {
        setUploading(false);
      }
    }
  };

  const formSchema = Yup.object().shape({
    image: Yup.string().required("Upload your profile photo"),
    name: Yup.string().required("Type your name"),
    email: Yup.string().required("Type your email"),
    request: Yup.string().required("Type your request"),
  });
  const handleSubmit = (values: FormikValues) => {
    console.log(values);
    localStorage.setItem("name", values.name);
    localStorage.setItem("email", values.email);
    localStorage.setItem("request", values.request);
    localStorage.setItem("image", values.image);
    setStep(3);
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitBtn")?.click(); // Trigger button click
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div className="pb-[60px]">
      <PageCard title="Attendee Details" step={step}>
        <Formik
          innerRef={formikRef}
          initialValues={initialValues}
          validationSchema={formSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={handleSubmit}
        >
          {({ errors, submitForm }) => (
            <Form>
              <div className="sm:p-[24px] sm:bg-[#052228] bg-none  sm:border border-[#07373F] rounded-[24px]">
                <h1 className="text-light font-robotoRegular">
                  Upload Profile Photo
                </h1>
                <div className="h-[200px] flex items-center justify-center cursor-pointer bg-none sm:bg-[#00000033] mt-10 mb-7">
                  <input
                    type="file"
                    accept="image/jpeg, image/jpg, image/png"
                    name="image"
                    ref={imageUploadRef}
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  {imageUrl ? (
                    <div className="w-[240px] h-[240px] rounded-[32px] border-4 border-[#24A0B5] overflow-hidden">
                      <img
                        src={imageUrl}
                        alt="Profile"
                        className="w-full h-full object-cover"
                        onClick={() => imageUploadRef.current?.click()}
                      />
                    </div>
                  ) : uploading ? (
                    <div className="w-[240px] h-[240px] flex justify-center items-center rounded-[32px] border-4 border-[#24A0B5] overflow-hidden">
                      <FadeLoader color="#24A0B5" />
                    </div>
                  ) : (
                    <div
                      onClick={() => imageUploadRef.current?.click()}
                      className="w-[240px] flex flex-col items-center justify-center font-robotoRegular text-white h-[240px] bg-[#0E464F] border-4 border-[#24A0B5] rounded-[32px]"
                    >
                      <CloudArrowDownIcon className="text-white h-7 w-7 mb-3" />
                      <h1>Drag & drop or click to </h1>
                      <h1>upload</h1>
                    </div>
                  )}
                </div>
                {errors.image && (
                  <div className="text-red-500 font-robotoRegular text-[12px] text-center">
                    {errors.image?.toString()}
                  </div>
                )}
              </div>
              <div className="w-full h-[4px] rounded-[5px] bg-[#07373F] my-10"></div>
              <div className="space-y-6">
                <InputField
                  label="Enter your name"
                  name="name"
                  type="text"
                  required
                />

                <InputField
                  label="Enter your email"
                  name="email"
                  type="email"
                  placeholder="hello@avioflagos.io"
                  required
                />

                <InputField
                  label="Special Request"
                  name="request"
                  type="textarea"
                  rows={3}
                  maxLength={120}
                  required
                />
              </div>

              <div className="flex sm:flex-row flex-col-reverse mt-6 gap-[12px] ">
                <Button outline onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button solid type="submit" id="submitBtn" onClick={submitForm}>
                  Get My Free Ticket
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </PageCard>
    </div>
  );
};

export default StepTwo;
