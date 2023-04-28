import Item from "./item";

export const Faq = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="flex flex-col mb-16 sm:text-center">
          <a href="/" class="mb-6 sm:mx-auto">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <i class="ri-question-answer-line ri-lg text-pink-400"></i>
            </div>
          </a>
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span class="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                    width="52"
                    height="24"
                  />
                </svg>
              </span>{" "}
              Frequently Ask Questions
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
              List of common questions and answers on a particular topic or
              subject.
            </p>
          </div>
        </div>
        <div class="space-y-4">
          <Item title="What should I do in an emergency?">
            If you or your family experience an emergency, please seek help
            immediately at the nearest hospital emergency room or RSUKSW
            emergency room. For emergency information, you can also call the
            RSUKSW emergency room at 021 - 12345678.
          </Item>
          <Item title="What should I prepare if I need hospitalization?">
            We understand that the hospitalization process may cause anxiety for
            some people. RSUKSW is committed to providing the best care
            experience for you and your family. Before starting the
            hospitalization process, there are several processes that you need
            to go through such as:
            <ol className="list-decimal p-5 space-y-2">
              <li>
                Make appointments and consultations with specialists at the
                polyclinic
              </li>
              <li>
                Getting directions from a doctor for hospitalization and
                undergoing certain actions or procedures
              </li>
              <li>
                Booking an inpatient room according to your needs to the
                emergency department or outpatient department.
              </li>
              <li>
                Conduct a COVID-19 antigen swab or PCR examination shortly
                before hospitalization
              </li>
            </ol>
          </Item>
          <Item title="What should I bring for treatment to RSUKSW?">
            <ol className="list-decimal p-5 space-y-2">
              <li>Kartu identitas(KTP/KK, KITAS, Paspor)</li>
              <li>
                Kartu kepesertaan asuransi(BPJS Kesehatan, BPJS Ketenagakerjaan,
                atau asuransi lainnya)
              </li>
              <li>
                Bukti pembuatan janji temu– pesan singkat dari Customer Care
                RSUI tentang pengingat janji temu
              </li>
              <li>Obat-obatan yang rutin dikonsumsi</li>
              <li>
                Surat rujukan yang masih berlaku(untuk pasien BPJS wajib membawa
                surat rujukan BPJS dari FKTP dan FKRTL tipe C)
              </li>
              <li>Alat bantu mobilitas, alat bantu dengar, dan kacamata</li>
            </ol>
          </Item>
          <Item title="What should I do after finishing the consultation with the doctor?">
            After consulting with the doctor, you can make your next appointment
            (control visit) at Customer Care or pick up your medication at the
            Outpatient Pharmacy.
          </Item>
        </div>
      </div>
    </div>
  );
};

export default Faq;
