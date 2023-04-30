import React from "react";

const News = () => {
  return (
    <div>
      {/* News */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">Breaking News</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-pink-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className="text-gray-700 lg:text-sm lg:max-w-md">
            The RS-UKSW just opened its doors to provide the most advanced care
            to patients. Equipped with the latest technology, world-class
            specialists, and a team of compassionate healthcare professionals,
            this hospital is revolutionizing the way we approach healthcare
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://rs.ui.ac.id/umum/files/artikel-populer/20230331154711-1.jpg"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Upaya Pencegahan dan Penanganan Risiko Penyakit Ginjal Kronik
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Ginjal bekerja mengatur keseimbangan cairan tubuh, elektrolit
                  dan asam basa serta mengeluarkan sisa metabolisme tubuh (urea,
                  kreatinin dan asam urat) dan zat kimia...
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://rs.ui.ac.id/umum/files/artikel-populer/20230321093310-1.jpg"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Memantau Pertumbuhan Gigi Si Kecil dengan Pemeriksaan
                  Panoramik Digital
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Pada anak-anak, periode tumbuh kembang gigi terbagi dua yaitu
                  periode gigi susu dan gigi bercampur.
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://rs.ui.ac.id/umum/files/artikel-populer/20230315110126-1.jpg"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Peran Laser dalam Operasi Urologi
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Laser adalah singkatan dari "Light Amplification by Stimulated
                  Emission of Radiation" atau "Penguatan Cahaya melalui Emisi
                  Stimulasi Radiasi".
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://rs.ui.ac.id/umum/files/artikel-populer/20230222151421-1.jpg"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Mencegah Batu Saluran Kemih dengan Rajin Mengonsumsi Air Putih
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Batu saluran kemih merupakan penyakit yang umum terjadi di
                  dunia. Penyakit ini ditandai oleh terbentuknya batu di ginjal
                  dan sering disebut nefrolitiasis.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="text-center">
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-pink-400 hover:text-deep-purple-800"
          >
            View More
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
