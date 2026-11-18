import { FaMapMarkerAlt, FaPhoneAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Container from "../Layout/container";

const offices = [
  {
    id: "makati",
    label: "Makati Office",
    address: "11F PMI Tower, 67 P. Ocampo Sr. Ext., La Paz, Makati, Philippines, 1204",
    // Simpler query so Google resolves it to one place and shows the address card
    mapQuery: "PMI Tower, 67 P. Ocampo Sr. Ext., Makati, Philippines",
    phone: ["+63 2 7002 3201", "+63 998 568 3188"],
    email: "biz.mgmakati@gmail.com",
  },
  {
    id: "tacloban",
    label: "Tacloban Office",
    address: "Machica Group HQ, 121-A Independencia St., Brgy. 51, Tacloban City, Leyte, Philippines, 6500",
    mapQuery: "Machica Group HQ,121-A Independencia St., Brgy. 51, Tacloban City, Leyte, Philippines, 6500",
    phone: ["+63 917 867 6837", "+63 968 690 8265"],
    email: "maxin.machicagroup@gmail.com",
  },
];

const IconCircle = ({ children, label }) => (
  <span
    aria-label={label}
    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a9cc4]/10 text-[#1a9cc4]"
  >
    {children}
  </span>
);

const OfficeMap = () => {
  return (
    <section className="py-12">
      <Container>
        <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-[#1a9cc4]" />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center pt-4 mb-24 text-[#1a9cc4]  ">Where to Find Us</h2>

        <div className="flex flex-col gap-12">
          {offices.map((office, index) => {
            const phones = Array.isArray(office.phone)
              ? office.phone
              : office.phone
              ? [office.phone]
              : [];

            return (
              <div key={office.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  {/* Map - right on desktop */}
                  <div className="w-full overflow-hidden shadow-lg md:order-2 mb-10">
                    <iframe
                      title={`MAXIN Office Location - ${office.label}`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        office.mapQuery
                      )}&output=embed`}
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Contact & location - left on desktop, top-aligned with the map */}
                  <div className="md:order-1 text-left self-start">
                    <h3 className="text-[18px] text-[#012289] font-bold text-maxin-blue mb-4">
                      {office.label}
                    </h3>

                    {/* Location */}
                    <div className="mb-4 flex items-start gap-3">
                      <IconCircle label="Location">
                        <FaMapMarkerAlt className="h-4 w-4" />
                      </IconCircle>
                      <p className="text-gray-600 text-[16px] pt-2">{office.address}</p>
                    </div>

                    {phones.length > 0 && (
                      <div>
                        {/* Numbers: first = phone icon, second = smartphone icon */}
                        {phones.map((number, i) => (
                          <div
                            key={`${number}-${i}`}
                            className={`flex items-start gap-3 ${i > 0 ? "mt-4" : ""}`}
                          >
                            <IconCircle label={i === 0 ? "Telephone" : "Mobile"}>
                              {i === 0 ? (
                                <FaPhoneAlt className="h-4 w-4" />
                              ) : (
                                <FaMobileAlt className="h-4 w-4" />
                              )}
                            </IconCircle>
                            <a
                              href={`tel:${number.replace(/\s/g, "")}`}
                              className="text-gray-600 text-[16px] pt-2 hover:text-maxin-blue"
                            >
                              {number}
                            </a>
                          </div>
                        ))}

                        {/* Email */}
                        <div className="mt-4 flex items-start gap-3">
                          <IconCircle label="Email">
                            <FaEnvelope className="h-4 w-4" />
                          </IconCircle>
                          <a
                            href={`mailto:${office.email}`}
                            className="text-gray-600 text-[16px] pt-2 hover:text-maxin-blue"
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Horizontal line between offices */}
                {index < offices.length - 1 && (
                  <hr className="mt-12 mb-10 border-t border-gray-300" />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default OfficeMap;