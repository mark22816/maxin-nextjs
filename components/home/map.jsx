import Container from "../../Layout/container";

const offices = [
  {
    id: "makati",
    label: "Makati Office",
    address: "11F PMI Tower, 67 P. Ocampo Sr. Ext., La Paz, Makati, Philippines, 1204",
  },
  {
    id: "tacloban",
    label: "Tacloban Office",
    address: "121-A Independencia St., Brgy. 51, Tacloban City, Leyte, Philippines, 6500",
  },
];

const OfficeMap = () => {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-2xl font-bold text-maxin-blue mb-6">Visit Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offices.map((office) => (
            <div key={office.id}>
              <h3 className="text-[18px] font-semibold text-maxin-blue mb-3">
                {office.label}
              </h3>

              <div className="w-full rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title={`MAXIN Office Location - ${office.label}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    office.address
                  )}&output=embed`}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <p className="mt-3 text-gray-600 text-[16px]">{office.address}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OfficeMap;