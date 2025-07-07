import SectionHeader from "../slider/SectionHeader";
import TravelPackageCard from "../card/TravelPackageCard";
const TravelPackagesSection = () => {
  const cards = [
    {
      image: "images/banner_section.webp",
      logo: "images/logo_packages.webp",
      title: "A Taste of Indigenous Culture: Journey Through BC’s Interior",
      link: "https://landsby.ca/tours/a-taste-of-indigenous-culture-journey-through-bcs-interior/?utm_source=DC&utm_medium=portal&utm_campaign=foodanddrink",
      price: "From USD $3,225 per person",
      duration: "5 Days",
    },
    {
      image: "images/banner_section.webp",
      logo: "images/logo_packages.webp",
      title: "A Taste of Indigenous Culture: Journey Through BC’s Interior",
      link: "https://landsby.ca/tours/a-taste-of-indigenous-culture-journey-through-bcs-interior/?utm_source=DC&utm_medium=portal&utm_campaign=foodanddrink",
      price: "From USD $3,225 per person",
      duration: "5 Days",
    },
    {
      image: "images/banner_section.webp",
      logo: "images/logo_packages.webp",
      title: "A Taste of Indigenous Culture: Journey Through BC’s Interior",
      link: "https://landsby.ca/tours/a-taste-of-indigenous-culture-journey-through-bcs-interior/?utm_source=DC&utm_medium=portal&utm_campaign=foodanddrink",
      price: "From USD $3,225 per person",
      duration: "5 Days",
    },
  ];

  return (
    <section className="my-16 lg:my-24">
      <div className="container px-4 md:px-16 2xl:px-20 3xl:px-0 max-w-screen-2xl 2xl:mx-auto">
        <div className="mb-6 lg:mb-12">
          <SectionHeader
            subtitle="Travel packages"
            title="Great regional escapes"
            buttonLabel="View Packages"
            className="text-black"
            buttonHref="#"
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-8">
          {cards.map((card, index) => (
            <TravelPackageCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelPackagesSection;
