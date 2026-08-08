
import React from "react";

function JourneyThroughTime() {

  const eras = [
    {
      title: "🏺 Ancient India",
      period: "2500 BCE – 600 BCE",
      image: "https://i.ibb.co/gbRv36HC/ancient-jpeg.jpg",
      description:
        "🏙️ Ancient India witnessed the rise of some of the world's earliest cities, including Harappa, Mohenjo-daro, and Dholavira. 📜 The Vedic period shaped early Indian traditions, literature, and philosophy. 👑 Powerful kingdoms and the Mahajanapadas emerged, while 🧘 Buddhism and Jainism introduced new spiritual ideas. ⚒️ Trade, agriculture, craftsmanship, science, and architecture flourished, laying the foundations for India's rich civilization.",
    },

    {
      title: "🏛️ Classical India",
      period: "600 BCE – 700 CE",
      image: "https://i.ibb.co/hJCvr0RG/classical-png.png",
      description:
        "🏛️ Classical India marked the golden age of Indian civilization, witnessing the rise of powerful empires such as the Maurya and Gupta Empires. 👑 Emperor Ashoka spread the message of peace and Buddhism across Asia after the Kalinga War, while 📚 great centers of learning like Nalanda and Takshashila attracted scholars from around the world. 🔭 Remarkable achievements in mathematics, astronomy, medicine, literature, art, and architecture flourished, making this era one of India's most influential periods.",
    },

    {
      title: "⚔️ Early Medieval India",
      period: "700 CE – 1200 CE",
      image: "https://i.ibb.co/bMf9bVnC/EARLY-MEDIEVAL-png.png",
      description:
        "⚔️ Early Medieval India saw the emergence of powerful regional kingdoms including the Cholas, Chalukyas, Rashtrakutas, Pallavas, and Rajputs. 🛕 Magnificent temples and monuments showcased remarkable advances in architecture and sculpture, while 🚢 flourishing maritime trade connected India with Southeast Asia and beyond. 📖 Literature, art, science, and regional cultures prospered, strengthening India's rich cultural heritage and political diversity.",
    },

    {
      title: "🕌 Medieval India",
      period: "1200 CE – 1526 CE",
      image: "https://i.ibb.co/kg06jHN6/MEDIEVAL-INDIA-png.png",
      description:
        "🕌 Medieval India began with the establishment of the Delhi Sultanate, introducing new systems of administration, architecture, and cultural exchange. ⚔️ Dynasties such as the Slave, Khilji, Tughlaq, Sayyid, and Lodi expanded their influence across northern India, while 🏰 magnificent forts, mosques, and cities transformed the landscape. 🌍 Trade, agriculture, crafts, and the spread of Sufi traditions contributed to a vibrant and diverse society.",
    },

    {
      title: "👑 Mughal & Regional Era",
      period: "1526 CE – 1757 CE",
      image: "https://i.ibb.co/Qjfcmj1N/MUGHAL-png.png",
      description:
        "👑 The Mughal & Regional Era began with Babur's victory at the First Battle of Panipat, leading to the rise of the Mughal Empire. 🏰 Emperors such as Akbar, Jahangir, Shah Jahan, and Aurangzeb shaped India's political and cultural landscape, while ⚔️ powerful regional kingdoms including the Marathas, Rajputs, Sikhs, and Vijayanagara Empire asserted their influence. 🎨 This period witnessed extraordinary achievements in architecture, literature, painting, administration, and international trade.",
    },

    {
      title: "🇬🇧 Colonial India",
      period: "1757 CE – 1947 CE",
      image: "https://i.ibb.co/wh171fvM/COLONIAL-png.png",
      description:
        "🇬🇧 Colonial India began after the Battle of Plassey, bringing much of the subcontinent under British rule. 🚂 Railways, telegraphs, and modern institutions transformed infrastructure, while economic policies reshaped Indian society. ✊ The struggle for freedom united millions through movements led by Mahatma Gandhi, Subhas Chandra Bose, Bhagat Singh, Rani Lakshmibai, Bal Gangadhar Tilak, and countless others. 🇮🇳 After decades of sacrifice and resistance, India achieved independence on 15 August 1947.",
    },

    {
      title: "🇮🇳 Independent India",
      period: "1947 CE – Present",
      image: "https://i.ibb.co/wrwxZXNg/INDEPENDENT-png.png",
      description:
        "🇮🇳 Independent India emerged as the world's largest democracy after gaining freedom in 1947 and adopting its Constitution in 1950. 🏛️ The nation has made remarkable progress in science, technology, agriculture, education, industry, and space exploration, with achievements such as ISRO's Chandrayaan and Mangalyaan missions. 🚀 Rapid economic growth, digital innovation, cultural diversity, and global leadership continue to shape modern India while preserving its rich historical heritage.",
    },
  ];

  return (
   
    <div
      style={{
        background: "#F8F3EF",
        minHeight: "100vh",
        paddingTop: "60px",
        paddingBottom: "80px",
      }}
    >
      <div className="container">

        {/* Hero Section */}

        <div className="text-center mb-5">

          <h1
            style={{
              color: "#8C3C11",
              fontWeight: "bold",
              fontSize: "3rem",
            }}
          >
            ⏳ Journey Through Time
          </h1>

          <p
            style={{
              color: "#7D7D7D",
              fontSize: "1.2rem",
              maxWidth: "750px",
              margin: "20px auto",
              lineHeight: "1.8",
            }}
          >
            Explore the Seven Great Eras of Indian History. Travel through
            over 5,000 years of civilization, from the Indus Valley to
            Independent India, and discover the people, empires, culture,
            and events that shaped the nation.
          </p>

        </div>

        {/* Era Cards */}

                 {eras.map((era, index) => (
          <div
            key={index}
            className="row align-items-center mb-5"
            style={{
              background: "#FFFFFF",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "60px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
            }}
          >
            {index % 2 === 0 ? (
              <>
                {/* Image Left */}
                <div className="col-lg-5 col-md-12 text-center mb-4 mb-lg-0">
                  <img
                    src={era.image}
                    alt={era.title}
                    className="img-fluid"
                    style={{
                      borderRadius: "15px",
                      width: "100%",
                      maxHeight: "400px",
                      objectFit: "cover",
                      border: "4px solid #E8E2DC",
                    }}
                  />
                </div>

                {/* Content Right */}
                <div className="col-lg-7 col-md-12">
                  <h2
                    style={{
                      color: "#8C3C11",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {era.title}
                  </h2>

                  <h5
                    style={{
                      color: "#A56A45",
                      marginBottom: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {era.period}
                  </h5>

                  <p
                    style={{
                      color: "#555",
                      lineHeight: "1.9",
                      fontSize: "17px",
                      textAlign: "justify",
                    }}
                  >
                    {era.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Content Left */}
                <div className="col-lg-7 col-md-12 order-2 order-lg-1">
                  <h2
                    style={{
                      color: "#8C3C11",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {era.title}
                  </h2>

                  <h5
                    style={{
                      color: "#A56A45",
                      marginBottom: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {era.period}
                  </h5>

                  <p
                    style={{
                      color: "#555",
                      lineHeight: "1.9",
                      fontSize: "17px",
                      textAlign: "justify",
                    }}
                  >
                    {era.description}
                  </p>
                </div>

                {/* Image Right */}
                <div className="col-lg-5 col-md-12 text-center order-1 order-lg-2 mb-4 mb-lg-0">
                  <img
                    src={era.image}
                    alt={era.title}
                    className="img-fluid"
                    style={{
                      borderRadius: "15px",
                      width: "100%",
                      maxHeight: "400px",
                      objectFit: "cover",
                      border: "4px solid #E8E2DC",
                    }}
                  />
                </div>
              </>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}

export default JourneyThroughTime;
