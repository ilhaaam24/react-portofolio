import Card from "../components/Card";

const Certifications = () => {
  const certifications = [
    {
      title: " Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      credentialId: "GRX52E6Q3X0M",
      image: "/assets/certifications/web.jpg", // Ganti dengan URL gambar sertifikat
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding",
      credentialId: "JMZVDKL43ZN9",
      image: "/assets/certifications/javascript.jpg", // Ganti dengan URL gambar sertifikat
    },
    {
      title: " Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding",
      credentialId: "81P2VNKRYPOY",
      image: "/assets/certifications/webpemula.jpg", // Ganti dengan URL gambar sertifikat
    },
    {
      title: " Belajar Membuat Aplikasi Back-End untuk Pemula",
      issuer: "Dicoding",
      credentialId: "53XEO54KYZRN",
      image: "/assets/certifications/bepemula.jpg", // Ganti dengan URL gambar sertifikat
    },

    {
      title: "Responsive Web Design",
      issuer: "Freecodecamp",
      credentialId: "fcc71692c8b-53a5-43ab-be8e-ccd55f003509",
      image: "/assets/certifications/freecodecamp.jpg", // Ganti dengan URL gambar sertifikat
    },
    // Tambahkan sertifikat lainnya sesuai kebutuhan
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 my-20">
      <h1 className="text-3xl font-bold">Certifications</h1>
      <div className="flex flex-wrap justify-center gap-10 w-full max-w-screen-lg">
        {certifications.map((cer, index) => (
          <Card 
            key={index}
            title={cer.title}
            issuer={cer.issuer}
            image={cer.image}
            />
        ))}
      </div>
    </div>
  );
}

export default Certifications
