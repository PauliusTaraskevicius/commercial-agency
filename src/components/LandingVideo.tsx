interface LandingVideoProps {
  src: string | undefined;
}

export const LandingVideo = ({ src }: LandingVideoProps) => {
  return (
    <video
      className="fixed top-0 right-0 z-10 h-full w-full max-w-[inherit] bg-transparent object-cover"
      autoPlay={true}
      loop={true}
      muted
      src={src}
      playsInline
    >
      <source src={src} type="video/mp4" />
    </video>

  );
};


