const Image = ({ imgSrc, caption }) => (
  <div className="relative mb-4 last:mb-0">
    <figure className="aspect-4/3 relative">
      <img
        alt={caption}
        loading="lazy"
        decoding="async"
        className="object-cover"
        src={imgSrc}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: 0,
          color: "transparent",
        }}
      />
    </figure>
    <figcaption className="absolute bottom-0 right-0 px-4 py-2 text-xs text-white">
      {caption}
    </figcaption>
  </div>
);

export default Image;
