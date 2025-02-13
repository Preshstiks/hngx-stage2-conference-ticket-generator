import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from "./components/Button";
import PageCard from "./components/PageCard";
import { TicketTypeCard } from "./components/TicketTypeCard";
import { useState, Dispatch, SetStateAction } from "react";
import { Formik, FormikValues } from "formik";
import { Form } from "formik";

interface StepOneProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const StepOne = ({ step, setStep }: StepOneProps) => {
  const cardDetails = [
    { title: "REGULAR ACCESS", numberLeft: 20, amount: "Free" },
    { title: "VIP ACCESS", numberLeft: 20, amount: "$50" },
    { title: "VVIP ACCESS", numberLeft: 20, amount: "$150" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const ticketOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleSubmit = (values: FormikValues) => {
    localStorage.setItem("ticketType", values.selectedTicket);
    localStorage.setItem("ticketNumber", values.tickets);
  };
  return (
    <div className="pb-[60px]">
      <PageCard title="Ticket Selection" step={step}>
        <div className="rounded-[24px] flex items-center pb-7 px-4 justify-center bg-radialCard text-center min-h-[200px] h-full max-w-[556px] w-full border-x-2 border-b-2 border-[#07373F]">
          <div>
            <h1 className="sm:text-[62px] text-[40px] font-roadrageRegular text-white">
              Techember Fest "25
            </h1>
            <h1 className="text-white sm:text-[16px] text-[12px] mb-2 font-robotoRegular max-w-[340px] w-full mx-auto">
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </h1>
            <div className="text-white flex sm:flex-row sm:text-[16px] text-[12px] flex-col items-center justify-center sm:gap-[16px] gap-0 font-robotoRegular">
              <h1 className="sm:pb-0 pb-2">📍 [Event Location]</h1>
              <h1 className="sm:block hidden">| |</h1>
              <h1>March 15, 2025 | 7:00 PM</h1>
            </div>
          </div>
        </div>
        <div className="w-full h-[4px] rounded-[5px] bg-[#07373F] my-10"></div>

        <Formik
          initialValues={{
            selectedTicket:
              sessionStorage.getItem("ticketType") || cardDetails[0].title,
            tickets: sessionStorage.getItem("ticketNumber") || "",
          }}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, submitForm }) => (
            <Form>
              <div>
                <h1 className="text-light pb-3 font-robotoRegular">
                  Select Ticket Type:
                </h1>
                <div className="p-4 w-full bg-[#052228] border border-[#07373F] rounded-[24px] text-white">
                  <TicketTypeCard
                    cards={cardDetails}
                    setFieldValue={(field, value) => {
                      sessionStorage.setItem("ticketType", value);
                      setFieldValue(field, value);
                    }}
                    selectedTicket={values.selectedTicket}
                  />
                </div>
              </div>

              <div className="mt-7">
                <label className="font-robotoRegular text-white">
                  Number of Tickets
                </label>
                <div className="relative mt-3 mb-7">
                  <div
                    className="h-[48px] flex items-center justify-between px-4 cursor-pointer text-white font-robotoRegular w-full border border-[#07373F] rounded-[12px]"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <h1>{values.tickets || 1}</h1>
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <div className="absolute w-full h-[200px] mt-1 bg-[#052228] border border-[#07373F] rounded-[12px] py-2 z-10 overflow-y-auto top-full">
                      {ticketOptions.map((number) => (
                        <div
                          key={number}
                          className="px-4 py-2 hover:bg-[#07373F] cursor-pointer transition-colors text-white"
                          onClick={() => {
                            setFieldValue("tickets", number);
                            sessionStorage.setItem(
                              "ticketNumber",
                              number.toString()
                            );
                            setIsOpen(false);
                          }}
                        >
                          {number}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex sm:flex-row flex-col-reverse gap-[12px]">
                <Button outline>Cancel</Button>
                <Button
                  solid
                  onClick={() => {
                    submitForm();
                    setStep(2);
                  }}
                >
                  Next
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </PageCard>
    </div>
  );
};

export default StepOne;
