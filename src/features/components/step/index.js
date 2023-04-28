const Step = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-pink-400">
            Easy Step
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{" "}
          easy way to access and make an appointment
        </h2>
      </div>
      <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-2xl font-bold">Step 1</p>
            <svg
              className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
          <p className="text-gray-600">
            Create an account: The first step to making an appointment on a
            hospital website is to create an account. This usually involves
            providing some basic personal information such as your name, date of
            birth, and contact information.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-2xl font-bold">Step 2</p>
            <svg
              className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
          <p className="text-gray-600">
            Find the "Make an Appointment" section: Once you have created an
            account, look for the section of the website where you can make an
            appointment.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-2xl font-bold">Step 3</p>
            <svg
              className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
          <p className="text-gray-600">
            Select the type of appointment you need: Next, choose the type of
            appointment you need. This might include options such as "Primary
            Care," "Specialty Care," or "Lab Tests." You may also need to
            provide additional information such as the reason for your visit.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-2xl font-bold">Success</p>
            <svg
              className="w-8 text-gray-600"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </div>
          <p className="text-gray-600">
            Choose a date and time: Finally, select a date and time for your
            appointment. Once you have chosen a time, confirm your appointment
            and make any necessary payments or co-pays.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step;
