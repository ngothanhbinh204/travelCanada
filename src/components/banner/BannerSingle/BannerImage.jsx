const BannerImage = ({ imageUrl }) => {
  return (
    <div className="box_img absolute inset-0 overflow-hidden">
      <img className="h-full w-full object-cover" src={imageUrl} alt="" />
    </div>
  );
};

export default BannerImage;
