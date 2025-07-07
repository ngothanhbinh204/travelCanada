import SectionLayout from "./sectionLayout/SectionLayout";

const SectionImageText = ({ layout }) => {
  const data = {
    title: "Vancouver",
    imgSrc: "images/banner_section.webp",
    caption: "Julian Apse",
    description: `Where the skyline of glass towers reflects the beauty of the surrounding ocean and coastal mountains. Where you can swim at the beach and explore a mountain in the same day. Where the cuisine is world-class and the nightlife electrifying. Vancouver is definitely spectacular by nature.`,
    buttonText: "Explore Vancouver",
    buttonLink: "#",
  };

  return (
    <section className="section_c py-10">
      <SectionLayout layout={layout} {...data} />
    </section>
  );
};

export default SectionImageText;
